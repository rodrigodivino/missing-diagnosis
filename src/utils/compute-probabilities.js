import { ascending, quantile, extent, mean, sum } from "d3";
/**
 *
 * @param {*} data
 * @param {*} columns
 * @param {*} columnTypes
 */
export function computeEstimativeMatrix(data, columns, columnTypes) {
  const errorMatrix = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));
  const binsMatrix = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));
  for (let i = 0; i < columns.length; i++) {
    const iDim = columns[i];
    const sampleSize = sum(data.map(d => d[iDim] === null));
    errorMatrix[i][i] = sampleSize;
    if (sampleSize === 0) continue;
    for (let j = 0; j < columns.length; j++) {
      if (i === j) continue;
      const jDim = columns[j];
      let population = data.map(d => d[jDim]);
      let subsample = data.filter(d => d[iDim] === null).map(d => d[jDim]);
      if (columnTypes[j] === "Quantitative") {
        const binRules = FreedmanDiaconis(population);
        const populationBins = binsMatrix[j][j]
          ? binsMatrix[j][j]
          : Histogram(population, binRules);
        const expectedBins = populationBins.map(b => ({
          ...b,
          count: Math.round((sampleSize / data.length) * b.count)
        }));
        const subsampleBins = Histogram(subsample, binRules);
        errorMatrix[i][j] = CompareBins(expectedBins, subsampleBins);
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
        errorMatrix[i][j] = CompareBins(expectedBins, subsampleBins);
        if (binsMatrix[j][j] === null) binsMatrix[j][j] = populationBins;
        binsMatrix[i][j] = [expectedBins, subsampleBins];
      }
    }
  }
  const estimativeMatrix = RefineEstimative(
    data,
    data.columns,
    columnTypes,
    errorMatrix,
    binsMatrix
  );
  const refineEstimative = (currentEstimative, R) =>
    RefineEstimative(
      data,
      data.columns,
      columnTypes,
      errorMatrix,
      binsMatrix,
      currentEstimative,
      R
    );
  return [estimativeMatrix, binsMatrix, refineEstimative];
}

function RefineEstimative(
  data,
  columns,
  columnTypes,
  errorMatrix,
  binsMatrix,
  previousEstimative = null,
  R = 100
) {
  const estimativeMatrix = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));
  for (let i = 0; i < columns.length; i++) {
    const sampleSize = errorMatrix[i][i];
    if (sampleSize === 0) continue;
    for (let j = 0; j < columns.length; j++) {
      if (i === j) continue;
      const jDim = columns[j];
      let population = data.map(d => d[jDim]);
      const expectedBins = binsMatrix[i][j][0];
      estimativeMatrix[i][j] = 0;
      for (let n = 0; n < R; n++) {
        let subsample = Resample(population, sampleSize);
        let subsampleBins;
        if (columnTypes[j] === "Quantitative") {
          const binRules = FreedmanDiaconis(population);
          subsampleBins = Histogram(subsample, binRules);
        } else {
          const levels = Levels(population);
          subsampleBins = Count(subsample, levels);
        }
        estimativeMatrix[i][j] +=
          CompareBins(subsampleBins, expectedBins) < errorMatrix[i][j] ? 1 : 0;
      }
      estimativeMatrix[i][j] = estimativeMatrix[i][j] / R;
      if (previousEstimative) {
        const weight = previousEstimative[0][0];
        estimativeMatrix[i][j] =
          (estimativeMatrix[i][j] + weight * previousEstimative[i][j]) /
          (weight + 1);
        estimativeMatrix[0][0] = previousEstimative[0][0];
        estimativeMatrix[1][1] = previousEstimative[1][1];
      }
    }
  }

  estimativeMatrix[0][0]++;
  estimativeMatrix[1][1] += R;
  return estimativeMatrix;
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
  for (let i = 0; i < rules.numOfBins; i++) {
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

  const binWidth = freedmanDiaconis(population.filter(d => d !== null));
  const [min, max] = extent(population);
  const numOfBins = Math.ceil(Math.abs(min - max) / binWidth);
  return { binWidth, min, numOfBins };
}

function Resample(array, sampleSize) {
  const bucket = [];

  for (let i = 0; i < array.length; i++) {
    bucket.push(i);
  }

  const getRandomFromBucket = () => {
    const randomIndex = Math.floor(Math.random() * bucket.length);
    return bucket.splice(randomIndex, 1)[0];
  };

  const resample = [];
  for (let i = 0; i < sampleSize; i++) {
    resample.push(array[getRandomFromBucket()]);
  }

  return resample;
}
