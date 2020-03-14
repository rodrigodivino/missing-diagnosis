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
