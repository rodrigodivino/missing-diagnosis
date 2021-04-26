import { ascending, quantile, extent, mean, sum, shuffle} from "d3";

function ComissingMetric(sortedZip) {
  const mask = sortedZip.map(z => z.mask);
  const values = sortedZip.map(z => z.value);
  const maskedValues = values.filter((d,i) => mask[i]);
  if(maskedValues.length === 0) {
    return 0;
  }
  return maskedValues.filter(d=>d===null).length / maskedValues.length;
}

/**
 *
 * @param {*} data
 * @param {*} columns
 * @param {*} columnTypes
 */
export function computeEstimativeMatrix(data, columns, columnTypes) {
  const observedBootstrapMetricMatrix = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));

  const observedCoMissingMetricMatrix = new Array(columns.length)
      .fill(0)
      .map(() => new Array(columns.length).fill(null));

  const binsMatrix = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));
  for (let i = 0; i < columns.length; i++) {
    const iDim = columns[i];
    const sampleSize = data.filter(d => d[iDim] === null).length;
    observedBootstrapMetricMatrix[i][i] = sampleSize;
    if (sampleSize === 0) continue;
    for (let j = 0; j < columns.length; j++) {
      if (i === j) continue;
      const [mask, values] = MaskAndValues(data, columns, i, j);

      const sortedZip = ZipAndSort(mask, values)

      const jDim = columns[j];
      let population = data.map(d => d[jDim]);
      let subsample = data.filter(d => d[iDim] === null).map(d => d[jDim]);
      if (columnTypes[j] === "Quantitative" || columnTypes[j] === "Ordinal") {
        const binRules = FreedmanDiaconis(population);
        const populationBins = binsMatrix[j][j]
          ? binsMatrix[j][j]
          : Histogram(population, binRules);
        const expectedBins = populationBins.map(b => ({
          ...b,
          count: Math.round((sampleSize / data.length) * b.count)
        }));
        const subsampleBins = Histogram(subsample, binRules);

        observedBootstrapMetricMatrix[i][j] =  QuantitativeBootstrapMetric(sortedZip)


        if (binsMatrix[j][j] === null) binsMatrix[j][j] = populationBins;
        binsMatrix[i][j] = [expectedBins, subsampleBins];
      } else {
        const levels = Levels(population);
        const populationBins = binsMatrix[j][j]
          ? binsMatrix[j][j]
          : Count(population, levels);
        const expectedBins = populationBins.map(b => ({
          ...b,
          count: (sampleSize / data.length) * b.count
        }));
        const subsampleBins = Count(subsample, levels);
        // observedBootstrapMetricMatrix[i][j] = CompareBins(expectedBins, subsampleBins);

        // New Categorical Metric
        observedBootstrapMetricMatrix[i][j] = CategoricalBootstrapMetric(sortedZip)

        if (binsMatrix[j][j] === null) binsMatrix[j][j] = populationBins;
        binsMatrix[i][j] = [expectedBins, subsampleBins];
      }
      observedCoMissingMetricMatrix[i][j] = ComissingMetric(sortedZip);
    }

  }
  const {estimativeMatrix, coMissingEstimativeMatrix} = RefineEstimative(
    data,
    data.columns,
    columnTypes,
    observedBootstrapMetricMatrix,
      observedCoMissingMetricMatrix,
    binsMatrix,
  );

  const refineEstimative = (currentMetricEstimative, currentCoMissingEstimative, R) =>
    RefineEstimative(
      data,
      data.columns,
      columnTypes,
      observedBootstrapMetricMatrix,
        observedCoMissingMetricMatrix,
      binsMatrix,
        currentMetricEstimative,
        currentCoMissingEstimative,
      R
    );
  return [estimativeMatrix,coMissingEstimativeMatrix, binsMatrix, refineEstimative];
}
function ZipAndSort(mask, values) {
  const zip = values.map((value, i)=>({value, mask: mask[i]}))
  const sortedZip = zip.sort((a,b) => ascending(a.value, b.value))
  return sortedZip
}

function MaskAndValues(data, columns, i, j) {
  return [data.map(d=>d[columns[i]] === null), data.map(d=>d[columns[j]])]
}

function QuantitativeBootstrapMetric(zip) {
  const validZip = zip.filter(z => z.value !== null)
  const mask = validZip.map(d => d.mask)
  const step = validZip.length / mask.filter(d=>d).length;
  let sum = 0;
  let maxSumValue = -Infinity;
  let minSumValue = Infinity;
  for(let i=0;i<mask.length;i++){
    sum = sum - 1;
    if(mask[i]) {
      sum = sum + step;
    }
    if(sum > maxSumValue){
      maxSumValue = sum
    }
    if(sum < minSumValue){
      minSumValue = sum
    }
  }

  let diff = maxSumValue - minSumValue
  diff = isNaN(diff) ? 0 : diff;
  return diff;
}


function CategoricalBootstrapMetric(zip) {
  const validZip = zip.filter(z => z.value !== null)
  const percentageMissing = validZip.filter(z => z.mask).length / validZip.length
  const categories = [... new Set(validZip.map(z=>z.value))];
  const categoryData = categories.map(c => validZip.filter(z => z.value === c))
  const squareErrorArray = categoryData.map(categoryDatum => {
    const expectedMissing = Math.floor(categoryDatum.length * percentageMissing);
    const actualMissing = categoryDatum.filter(z => z.mask).length;
    return Math.pow(expectedMissing - actualMissing, 2)
  })
  const meanSquareError = mean(squareErrorArray);

  return Math.sqrt(meanSquareError);
}

function RefineEstimative(
  data,
  columns,
  columnTypes,
  observedBootstrapMetricMatrix,
  observedCoMissingMetricMatrix,
  binsMatrix,
  previousEstimative = null,
  previousComissingEstimative = null,
  R = 100
) {
  const estimativeMatrix = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));

  const coMissingEstimativeMatrix = new Array(columns.length)
      .fill(0)
      .map(() => new Array(columns.length).fill(null));

  for (let i = 0; i < columns.length; i++) {
    const sampleSize = observedBootstrapMetricMatrix[i][i];
    if (sampleSize === 0) continue;
    for (let j = 0; j < columns.length; j++) {
      if (i === j) continue;
      const [mask, values] = MaskAndValues(data, columns, i, j);
      const sortedZip = ZipAndSort(mask, values);

      coMissingEstimativeMatrix[i][j] = 0;
      estimativeMatrix[i][j] = 0;
      for (let n = 0; n < R; n++) {
        let randomizedZip = RandomizeZipMask(sortedZip);


        coMissingEstimativeMatrix[i][j] += ComissingMetric(randomizedZip)>= observedCoMissingMetricMatrix[i][j] ? 0 : 1;

        if (columnTypes[j] === "Quantitative" || columnTypes[j] === "Ordinal") {
          estimativeMatrix[i][j] +=
              QuantitativeBootstrapMetric(randomizedZip) >= observedBootstrapMetricMatrix[i][j] ? 0 : 1;
        } else {
          estimativeMatrix[i][j] +=
              CategoricalBootstrapMetric(randomizedZip) >= observedBootstrapMetricMatrix[i][j] ? 0 : 1;
        }

      }
      estimativeMatrix[i][j] = estimativeMatrix[i][j] / R;
      coMissingEstimativeMatrix[i][j] = coMissingEstimativeMatrix[i][j] / R;
      if (previousEstimative) {
        const count = previousEstimative[0][0] + 1;

        const previousAverage = previousEstimative[i][j];
        const newAverage = estimativeMatrix[i][j];
        const mergedAverages = previousAverage * ((count-1)/count) + newAverage / count;
        estimativeMatrix[i][j] = mergedAverages;
        estimativeMatrix[0][0] = previousEstimative[0][0];
        estimativeMatrix[1][1] = previousEstimative[1][1];

        const previousComissingAverage = previousComissingEstimative[i][j];
        const newComissingAverage = coMissingEstimativeMatrix[i][j];
        const mergedComissingAverages = previousComissingAverage * ((count-1)/count) + newComissingAverage / count;
        coMissingEstimativeMatrix[i][j] = mergedComissingAverages;
        coMissingEstimativeMatrix[0][0] = previousComissingEstimative[0][0];
        coMissingEstimativeMatrix[1][1] = previousComissingEstimative[1][1];
      }
    }
  }

  estimativeMatrix[0][0]++;
  estimativeMatrix[1][1] += R;

  coMissingEstimativeMatrix[0][0]++;
  coMissingEstimativeMatrix[1][1] += R;

  return {estimativeMatrix, coMissingEstimativeMatrix};
}

function Count(array, levels) {
  if (typeof levels[0] === "number") {
    levels.sort(ascending);
  }
  let bins = new Array(levels.length + 1);
  for (let i = 0; i < levels.length; i++) {
    bins[i] = {
      name: levels[i],
      count: 0
    };
  }
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value === null) continue;
    const bin = levels.indexOf(value);
    bins[bin].count++;
  }
  bins[bins.length - 1] = {
    name: "miss",
    count: array.filter(v => v === null).length
  };
  return bins;
}

export function Levels(array) {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

function CompareBins(bins1, bins2) {
  const squareErrors = [];
  for (let i = 0; i < bins1.length; i++) {
    const bin1 = bins1[i];
    const bin2 = bins2[i];
    squareErrors.push(Math.pow(bin2.count - bin1.count, 2));
  }

  return Math.sqrt(mean(squareErrors));
}

function Histogram(array, rules) {
  let binName = 0;
  let bins = new Array(rules.numOfBins + 1);
  for (let i = 0; i <= rules.numOfBins; i++) {
    bins[i] = {
      name: binName,
      minNum: rules.min + i * rules.binWidth,
      maxNum: rules.min + (i + 1) * rules.binWidth,
      count: 0
    };
    binName++;
  }
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value === null) continue;
    const binNumber = Math.floor((value - rules.min) / rules.binWidth);
    bins[binNumber].count++;
  }
  bins[bins.length - 1] = {
    name: "miss",
    count: array.filter(v => v === null).length
  };

  return bins;
}
function FreedmanDiaconis(population) {
  const iqr = array => {
    array.sort(ascending);
    const q1 = quantile(array, 0.25);
    const q3 = quantile(array, 0.75);
    return q3 - q1;
  };
  const freedmanDiaconis = array => {
    return 2 * (iqr(array) / Math.pow(array.length, 1 / 3));
  };

  // const binWidth = freedmanDiaconis(population.filter(d => d !== null));
  const [min, max] = extent(population);
  // const numOfBins = Math.ceil(Math.abs(min - max) / binWidth);
  const numOfBins = 2* Math.ceil(Math.pow(population.length, 1/3));
  const binWidth = Math.abs(min - max)/numOfBins;
  return { binWidth, min, numOfBins };
}

function RandomizeZipMask(zip) {
  const newZip = zip.map(zip => ({ ... zip}))
  const mask = zip.map(z => z.mask);
  shuffle(mask).forEach((m, i) => {
    newZip[i].mask = m
  });
  return newZip
}
