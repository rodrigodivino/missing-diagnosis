export function getRenderList(estimativeMatrix, selectedRangeInterval) {
  const renderList = [];
  for (let i = 0; i < estimativeMatrix.length; i++) {
    for (let j = 0; j < estimativeMatrix[0].length; j++) {
      if (
        i !== j &&
        estimativeMatrix[i][j] !== null &&
        __valueIsSelected(estimativeMatrix[i][j], selectedRangeInterval)
      ) {
        renderList.push([i, j]);
      }
    }
  }
  return renderList;
}

const __valueIsSelected = (value, range) =>
  value <= Math.max(...range) && value >= Math.min(...range);

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
