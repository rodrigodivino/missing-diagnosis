<script>
  import Tooltip from "./Tooltip.svelte";
  import { canvasWidth, canvasHeight } from "../../stores.js";
  import {
    getSliderHeight,
    applyDrag,
    getVisibleCells
  } from "../../methods/List.js";
  import { select, event, mouse } from "d3-selection";
  import { interpolateRdYlBu } from "d3-scale-chromatic";
  import { drag } from "d3-drag";
  import { onMount } from "svelte";

  export let x = 0;
  export let y = 0;
  export let width = 1;
  export let height = 1;
  export let binsMatrix;
  export let renderList;
  export let crossdata;
  export let columns;
  export let hoveredPair;

  const margin = { top: 10, bottom: 10, left: 10, right: 20 };
  $: innerWidth = width * $canvasWidth - margin.left - margin.right;
  $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;
  const numberOfCells = 3;
  $: cellHeight = innerHeight / numberOfCells - 5;

  $: sliderHeight = getSliderHeight(
    innerHeight,
    renderList.length,
    numberOfCells
  );

  let sliderDiscretePosition = 0;

  $: visibleCells = getVisibleCells(
    renderList,
    sliderDiscretePosition,
    numberOfCells,
    hoveredPair
  );

  $: sliderDrag = drag()
    .on("start", function() {
      select(this).attr("stroke", "black");
    })
    .on("drag", function() {
      let sliderPosition;
      if (event.y - sliderHeight / 2 < 0) sliderPosition = 0;
      else if (event.y - sliderHeight / 2 > innerHeight - sliderHeight)
        sliderPosition = innerHeight - sliderHeight;
      else sliderPosition = event.y - sliderHeight / 2;

      select(this).attr("y", sliderPosition);
      const discretePosition = Math.floor(
        sliderPosition / (innerHeight * (1 / renderList.length))
      );
      if (sliderDiscretePosition !== discretePosition)
        sliderDiscretePosition = discretePosition;
    })
    .on("end", function() {
      select(this).attr("stroke", "none");
    });

  let sliderDOM;
  $: applyDrag(sliderDOM, sliderDrag);

  const handleTooltipMouseOver = e => {
    hoveredPair = [+e.target.getAttribute("i"), +e.target.getAttribute("j")];
  };
</script>

<style>
  rect.slider {
    fill: slategray;
  }
  rect.slider_bg {
    fill: lightgray;
  }
</style>

<g
  class="outerRing"
  transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
  <g class="marginConvention" transform="translate({margin.left},{margin.top})">
    <g class="background">
      <rect
        class="slider_bg"
        x={innerWidth + margin.right * 0.1}
        width={margin.right * 0.9}
        y={0}
        height={innerHeight} />
      <rect
        class="slider"
        bind:this={sliderDOM}
        x={innerWidth + margin.right * 0.1}
        width={margin.right * 0.9}
        y={0}
        height={sliderHeight} />
    </g>

    <g
      class="foreground"
      on:mouseover={handleTooltipMouseOver}
      on:mouseout={() => (hoveredPair = null)}>
      {#each visibleCells as [i, j], index}
        <g transform="translate(0,{index * (cellHeight + 5)})">
          <Tooltip
            {i}
            {j}
            focus={hoveredPair && hoveredPair[0] === i && hoveredPair[1] === j}
            width={innerWidth}
            height={cellHeight}
            fill={crossdata[i][j] === null ? 'darkseagreen' : interpolateRdYlBu(crossdata[i][j])}
            samplingVariable={columns[i]}
            measurementVariable={columns[j]}
            totalBins={binsMatrix[j][j]}
            expectedBins={binsMatrix[i][j][0]}
            sampleBins={binsMatrix[i][j][1]} />
        </g>
      {/each}
    </g>

  </g>
</g>
