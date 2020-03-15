import { select } from "d3-selection";

export function getSliderHeight(
  availableHeight,
  numberOfElements,
  numberOfVisibleCells
) {
  if (numberOfElements === 0 || numberOfElements < numberOfVisibleCells) {
    return availableHeight;
  } else {
    return availableHeight * (numberOfVisibleCells / numberOfElements);
  }
}

export function applyDrag(sliderDOM, sliderDrag) {
  if (sliderDOM && sliderDrag) {
    select(sliderDOM).call(sliderDrag);
  }
}

/**
 * Compute the visible cells from the given renderList
 * @param {[number, number][]} renderList - A list of dimension pairs
 * @param {number} sliderDiscretePosition - The position of the slider in discrete units
 * @param {number} numberOfCells - The number of visible cells
 * @param {null | [number,number]} hoveredPair - The current hovered dimension pairs
 *
 * @returns {[number, number][]} - The subset of the renderList that will be rendered for this slide position
 */
export function getVisibleCells(
  renderList,
  sliderDiscretePosition,
  numberOfCells,
  hoveredPair
) {
  const subset = renderList.slice(
    sliderDiscretePosition,
    sliderDiscretePosition + numberOfCells
  );

  if (
    hoveredPair &&
    !subset.some(p => p[0] === hoveredPair[0] && p[1] === hoveredPair[1])
  ) {
    subset[0] = hoveredPair;
  }

  return subset;
}
