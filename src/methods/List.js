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
