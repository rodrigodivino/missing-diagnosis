/**
 * Compute the list of dimensions that are current selected
 * @param {number[][]} estimativeMatrix - A matrix of dimensions with the estimated MAR chance
 * @param {[number, number]} selectedRatioInterval - The selected ratio in range [1,0]
 * @param {number[]} selectedSamplingVariables - The list of selected sampling variables
 * @param {number[]} selectedMeasurementVariables - The list of selected measurement variables
 *
 * @returns {[number, number][]} A tuple array with the line i and column j that matches all conditions
 */
export function getRenderList(
  estimativeMatrix,
  selectedRatioInterval,
  selectedSamplingVariables,
  selectedMeasurementVariables
) {
  /**
   * @type {[number, number][]}
   */
  const renderList = [];

  for (let i = 0; i < estimativeMatrix.length; i++) {
    for (let j = 0; j < estimativeMatrix[0].length; j++) {
      if (
        i !== j &&
        estimativeMatrix[i][j] !== null &&
        __valueIsSelected(estimativeMatrix[i][j], selectedRatioInterval) &&
        (selectedSamplingVariables.length === 0 ||
          selectedSamplingVariables.includes(i)) &&
        (selectedMeasurementVariables.length === 0 ||
          selectedMeasurementVariables.includes(j))
      ) {
        renderList.push([i, j]);
      }
    }
  }
  return renderList;
}
/**
 * Compute the number of crossess in the actual minus expected histogram
 * @param {(number | Histogram | [Histogram, Histogram])[][]} binsMatrix
 * @param {string[]} columns
 * @param {string[]} columnsWithMissingValues
 * @param {string[]} columnTypes
 */
export function getCrossData(
  data,
  columns
) {
  const crossData = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));

  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (
        i !== j
      ) {
        let countOfMissingI = 0;
        let countOfMissingJ = 0;
        let countOfDoubleMissing = 0;
        for(let datum of data){
          const nullI = datum[columns[i]] === null;
          const nullJ = datum[columns[j]] === null;
          if(nullI) countOfMissingI++;
          if(nullJ) countOfMissingJ++;
          if(nullI && nullJ) countOfDoubleMissing++;
        }
        if(countOfMissingJ === 0 || countOfMissingI === 0){
          crossData[i][j] = 0;
        } else {
          crossData[i][j] = ((countOfDoubleMissing / countOfMissingI) + (countOfDoubleMissing / countOfMissingJ)) / 2;
        }

      }
    }
  }
  return crossData;
}
/**
 * Checks if value is between the given range
 * @private
 * @param {number} value
 * @param {[number, number]} range
 *
 * @returns {boolean}
 */
const __valueIsSelected = (value, range) =>
  value <= Math.max(...range) && value >= Math.min(...range);

/**
 * @typedef {Object} Bin - A bin of a Histogram
 * @property {string} name - The name of the bin
 * @property {number} [minNum] - The lower boundary of a Bin, if quantitative
 * @property {number} [maxNum] - The upper boundary of a Bin, if quantitative
 */

/**
 * @typedef {Bin[]} Histogram - A Histogram
 */
