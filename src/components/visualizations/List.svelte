<script>
  import Tooltip from "./Tooltip.svelte";
  import { canvasWidth, canvasHeight } from "../../stores.js";
  import {
    getSliderHeight,
    applyDrag,
    getVisibleCells,
    resetSliderDOM
  } from "../../methods/List.js";
  import { select, event, mouse } from "d3-selection";
  import { interpolatePuOr, interpolateTurbo, interpolateRdYlBu} from "d3-scale-chromatic";
  import { drag } from "d3-drag";
  import { onMount } from "svelte";
  import {scaleLinear} from 'd3-scale';
  import {color} from 'd3-color'

  export let x = 0;
  export let y = 0;
  export let width = 1;
  export let height = 1;
  export let binsMatrix;
  export let renderList;
  export let colordata;
  export let crossdata;
  export let columns;
  export let columnsWithMissingValues;
  export let hoveredPair;
  export let selectedRatioInterval;
  export let selectedSamplingVariables;
  export let selectedMeasurementVariables;
  export let columnTypes



  const interpolate = i => {
    return scaleLinear().domain([0,0.05,0.4,0.6,0.95,1]).range([interpolateRdYlBu(1), interpolateRdYlBu(0.8), '#9C9C9C','#9C9C9C' ,interpolateRdYlBu(0.2), interpolateRdYlBu(0.0)])(i)
  };
  const margin = { top: 0, bottom: 0, left: 0, right: 20 };
  $: innerWidth = width * $canvasWidth - margin.left - margin.right;
  $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;
  const numberOfCells = 4;
  $: cellHeight = innerHeight / numberOfCells - 5;

  $: sliderHeight = getSliderHeight(
    innerHeight,
    renderList.length,
    numberOfCells
  );

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

  $: sliderDiscretePosition = resetSliderDOM(sliderDOM, [
    selectedMeasurementVariables,
    selectedRatioInterval,
    selectedSamplingVariables
  ]);

  function getFill(i, j) {
    const iHasMissing = columnsWithMissingValues.includes(columns[i]);
    const jHasMissing = columnsWithMissingValues.includes(columns[j]);
    if(iHasMissing && jHasMissing) {
      return interpolate(colordata[i][j]);
    } else {
      return color('darkseagreen').darker();
    }
  }
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
        height={innerHeight}></rect>
      <rect
        class="slider"
        bind:this={sliderDOM}
        x={innerWidth + margin.right * 0.1}
        width={margin.right * 0.9}
        y={0}
        height={sliderHeight}></rect>
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
            continuous={columnTypes[j] === 'Quantitative'}
            height={cellHeight}
            fill={getFill(i,j)}
            samplingVariable={columns[i]}
            measurementVariable={columns[j]}
            nOfMissingSamples={binsMatrix[i][i][binsMatrix[i][i].length - 1].count}
            totalBins={binsMatrix[j][j]}
            expectedBins={binsMatrix[i][j][0]}
            sampleBins={binsMatrix[i][j][1]} />
        </g>
      {/each}
    </g>

  </g>
</g>
