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
  binsMatrix,
  columns,
  columnsWithMissingValues,
  columnTypes
) {
  const crossdata = new Array(columns.length)
    .fill(0)
    .map(() => new Array(columns.length).fill(null));
  const countCrosses = diffArray => {
    const filtered = diffArray.filter(v => v !== 0);
    if (filtered.length < 3) return 0;
    let crossess = 0;
    let prevSign = Math.sign(filtered[0]);
    for (let i = 1; i < filtered.length - 1; i++) {
      if (prevSign !== Math.sign(filtered[i])) {
        crossess++;
        prevSign = prevSign * -1;
      }
    }
    return Math.max(crossess - 1, 0) / (filtered.length - 2);
  };

  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (
        i !== j &&
        columnsWithMissingValues.includes(columns[i]) &&
        (columnTypes[j] === "Ordinal" || columnTypes[j] === "Quantitative")
      ) {
        const expectedCount = binsMatrix[i][j][0].map(b => b.count);
        const sampleCount = binsMatrix[i][j][1].map(b => b.count);
        const diffArray = expectedCount.map((c, i) => c - sampleCount[i]);
        crossdata[i][j] = countCrosses(diffArray);
      }
    }
  }
  return crossdata;
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
