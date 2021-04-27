<script>
  import { canvasWidth, canvasHeight } from "../../stores.js";
  import { select, event } from "d3-selection";
  import { scaleLinear, scaleBand, scaleLog, scalePow, scaleSequentialPow, scaleSequential } from "d3-scale";
  import { axisLeft, axisRight, axisBottom } from "d3-axis";
  import { line } from "d3-shape";
  import { path } from "d3-path";
  import { range, mean } from "d3-array";
  import { brushY } from "d3-brush";
  import {color} from 'd3-color';
  import {easeLinear, easeExpIn, easeExpOut} from 'd3-ease'
  import { onMount } from "svelte";
  import {
    interpolatePuOr,
    interpolateYlOrRd,
    interpolateCividis,
    interpolateTurbo,
    interpolateRdYlBu
  } from "d3-scale-chromatic";

  export let x = 0;
  export let y = 0;
  export let width = 1;
  export let height = 1;
  export let arcdata;
  export let colordata;
  const setArcdata = (newArcdata, newColorData) => {
    setTimeout(() => {
      arcdata = newArcdata;
      colordata = newColorData;
    }, 1);
  };
  export let crossdata;
  export let binsMatrix;
  export let columns;
  export let columnTypes;
  export let columnsWithMissingValues;
  export let refine;
  export let convergence;
  export let selectedRatioInterval;
  export let selectedSamplingVariables;
  export let selectedMeasurementVariables;
  export let hoveredPair;


  const interpolate = i => {
    return scaleLinear().domain([0,0.5,1]).range([interpolateRdYlBu(0.2), '#9C9C9C' ,interpolateRdYlBu(0.8)])(i)
  };
  const margin = { top: 50, bottom: 75, left: 150, right: 120 };
  $: innerWidth = width * $canvasWidth - margin.left - margin.right;
  $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

  $: ratioScale = scalePow().exponent(6.7)
    .domain([1, 100])
    .range([innerHeight, 0])
    .clamp(true);

  $: samplingScale = scaleBand()
    .domain(columnsWithMissingValues)
    .range([innerHeight, 0])
    .paddingInner(0.2);

  $: measurementScale = scaleBand()
    .domain(columns)
    .range([innerHeight, 0])
    .paddingInner(0.2);

  $: fakeColorScale = scaleLinear()
    .domain([0, 1])
    .range([0, innerWidth - 100]);

  $: colorScale = scaleLinear()
          .domain([1, 100])
          .range(['blue', 'red'])
          .clamp(true);

  $: console.log(colorScale(10), colorScale(90))

  $: ratioAxis = axisLeft(ratioScale);

  $: colorAxis = axisBottom(fakeColorScale);


  $: refineLevel = arcdata[1][1];

  let colorAxisDOM;
  const placeAxes = (colorAxisDOM, colorAxis) => {
    if (colorAxisDOM && colorAxis) {
      const cg = select(colorAxisDOM);
      cg.selectAll().remove();
      cg.call(colorAxis)
        .selectAll("g.tick")
        .selectAll("text")
        .attr("font-size", 10)
        .attr("y", 8) // 15 is for print mode
        .text(t => +(t * 100) + "%");
    }
  };
  $: placeAxes(colorAxisDOM, colorAxis);

  const drawEdge = (
    source,
    target,
    value,
    samplingScale,
    measurementScale,
    ratioScale
  ) => {
    const samplingBand = samplingScale.bandwidth();
    const measurementBand = measurementScale.bandwidth();

    const p = path();

    const sourceY = samplingScale(source) + value * samplingBand;
    const sourceX = 0;
    const valueY = ratioScale(value * 100);
    const valueX = innerWidth / 2;
    const targetY = measurementScale(target) + value * measurementBand;
    const targetX = innerWidth;

    const xDisplacement = innerWidth / 4;

    p.moveTo(0, sourceY);

    p.bezierCurveTo(
      sourceX + xDisplacement,
      sourceY,
      valueX - 15 - xDisplacement,
      valueY,
      valueX - 15,
      valueY
    );

    p.moveTo(valueX + 15, valueY);
    p.bezierCurveTo(
      valueX + 15 + xDisplacement,
      valueY,
      targetX - xDisplacement,
      targetY,
      targetX,
      targetY
    );

    return p.toString();
  };

  let lastArcData00;
  const errorThreshold = 0.5;
  const updateData = async arcdata => {
    if(arcdata[0][0] === lastArcData00) {
      console.warn('repeated call detected and ended');
      return;
    }
    let step = 10;
    const {estimativeMatrix, coMissingEstimativeMatrix} = await refine(arcdata, colordata, step);
    lastArcData00 = arcdata[0][0];
    let maxError = -Infinity;
    for (let i = 0; i < columns.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        if (i !== j && arcdata[i][j] !== null) {
          const diff = Math.abs(arcdata[i][j] - estimativeMatrix[i][j]) * 100;
          maxError = diff > maxError ? diff : maxError;
        }
      }
    }
    if (maxError >= errorThreshold) {
      setArcdata(estimativeMatrix, coMissingEstimativeMatrix);
    }
    convergence = maxError;
  };
  $: updateData(arcdata);

  let valueIsSelected = value =>
    value <= Math.max(...selectedRatioInterval) &&
    value >= Math.min(...selectedRatioInterval);
  let ratioBrushDOM;
  $: ratioBrush = brushY()
    .extent([[innerWidth / 2 - 13, -2], [innerWidth / 2 + 14, innerHeight+2]])
    .on("brush end", () => {
      if (event.selection) {
        selectedRatioInterval = event.selection.map(ratioScale.invert).map(d => d/100);
      } else {
        selectedRatioInterval = [1, 0];
      }
    });
  const placeBrush = (ratioBrushDOM, ratioBrush) => {
    if (ratioBrushDOM && ratioBrush) {
      select(ratioBrushDOM).call(ratioBrush);
    }
  };
  $: placeBrush(ratioBrushDOM, ratioBrush);

  const handlePathColor = (
    i,
    j,
    value,
    selectedRatioInterval,
    selectedSamplingVariables,
    selectedMeasurementVariables
  ) => {
    if (
      valueIsSelected(value) &&
      (selectedSamplingVariables.includes(i) ||
        selectedSamplingVariables.length === 0) &&
      (selectedMeasurementVariables.includes(j) ||
        selectedMeasurementVariables.length === 0)
    ) {
      const iHasMissing = columnsWithMissingValues.includes(columns[i]);
      const jHasMissing = columnsWithMissingValues.includes(columns[j]);
      if(iHasMissing && jHasMissing) {
        return interpolate(colordata[i][j]);
      } else {
        return color('darkseagreen').darker();
      }
    } else {
      return "lightgray";
    }
  };
  const handlePathClass = (
    i,
    j,
    value,
    selectedRatioInterval,
    selectedSamplingVariables,
    selectedMeasurementVariables
  ) => {
    if (valueIsSelected(value)) {
      if (
        selectedRatioInterval[0] === 1 &&
        selectedRatioInterval[1] === 0 &&
        selectedSamplingVariables.length === 0 &&
        selectedMeasurementVariables.length === 0
      ) {
        return "data";
      } else if (
        (selectedSamplingVariables.includes(i) ||
          selectedSamplingVariables.length === 0) &&
        (selectedMeasurementVariables.includes(j) ||
          selectedMeasurementVariables.length === 0)
      ) {
        return "dataSelected";
      }
    }

    return "dataNotSelected";
  };

  const getAmountOfSelectedInLine = (i, selectedRatioInterval) => {
    return (
      arcdata[i].filter(value => valueIsSelected(value)).length /
      (arcdata[i].length - 1)
    );
  };

  const getAmountOfSelectedInColumn = (j, selectedRatioInterval) => {
    const column = [];
    for (let i = 0; i < arcdata.length; i++) {
      if (i !== j && arcdata[i][j] !== null) {
        column.push(arcdata[i][j]);
      }
    }
    return (
      column.filter(value => valueIsSelected(value)).length / column.length
    );
  };

  const handleSamplingVariableClick = e => {
    if (e.target.tagName !== "text") return;
    const samplingVariable = +e.target.getAttribute("column");
    if (selectedSamplingVariables.includes(samplingVariable)) {
      selectedSamplingVariables = selectedSamplingVariables.filter(
        v => v !== samplingVariable
      );
    } else {
      selectedSamplingVariables.push(samplingVariable);
      selectedSamplingVariables = selectedSamplingVariables;
    }
  };

  const handleMeasurementVariableClick = e => {
    if (e.target.tagName !== "text") return;
    const measurementVariable = +e.target.getAttribute("column");
    if (selectedMeasurementVariables.includes(measurementVariable)) {
      selectedMeasurementVariables = selectedMeasurementVariables.filter(
        v => v !== measurementVariable
      );
    } else {
      selectedMeasurementVariables.push(measurementVariable);
      selectedMeasurementVariables = selectedMeasurementVariables;
    }
  };

  const handlePathMouseOver = e => {
    if (e.target.className.baseVal.includes("Not")) return;
    hoveredPair = [+e.target.getAttribute("i"), +e.target.getAttribute("j")];
  };

  let foreground;

  const toggleFocus = hoveredPair => {
    select(foreground)
      .selectAll("path")
      .each(function() {
        if (
          hoveredPair &&
          hoveredPair[0] === +select(this).attr("i") &&
          hoveredPair[1] === +select(this).attr("j")
        ) {
          select(this)
            .raise()
            .classed("focus", true);
        } else {
          select(this).classed("focus", false);
        }
      });
  };
  $: toggleFocus(hoveredPair);
</script>

<style>
  path.data {
    fill: none;
    stroke-width: 2px;
    opacity: 0.4;
  }

  path.dataNotSelected {
    fill: none;
    stroke-width: 0;
    opacity: 0;
  }

  path.dataSelected {
    fill: none;
    stroke-width: 2px;
    opacity: 0.5;
  }

  path.data:hover,
  path.focus,
  path.dataSelected:hover {
    stroke-width: 6px;
    opacity: 1;
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      stroke: black;
      stroke-width: 8px;
    }
  }

  rect.axis-tick {
    fill: white;
    stroke: black;
  }

  text.axis-tick {
    font-size: 0.7em;
    font-weight: bold;
  }

  text.axis-name {
    text-anchor: middle;
    font-size: 14px;
  }
</style>

<g
  class="outerRing"
  transform="translate({x * $canvasWidth}, {y * $canvasHeight})">

  <g class="marginConvention" transform="translate({margin.left},{margin.top})">
    <g class="background" />
    <g
      class="foreground"
      bind:this={foreground}
      on:mouseover={handlePathMouseOver}
      on:mouseout={() => {
        hoveredPair = null;
      }}>
      {#each columns as iName, i}
        {#each columns as jName, j}
          {#if i !== j && arcdata[i][j] !== null}
            <path
              {i}
              {j}
              class={handlePathClass(i, j, arcdata[i][j], selectedRatioInterval, selectedSamplingVariables, selectedMeasurementVariables)}
              stroke={handlePathColor(i, j, arcdata[i][j], selectedRatioInterval, selectedSamplingVariables, selectedMeasurementVariables)}
              d={drawEdge(columns[i], columns[j], arcdata[i][j], samplingScale, measurementScale, ratioScale)} />
          {/if}
        {/each}
      {/each}
    </g>

    <g class="layer1">
      <g class="sampling-axis">
        <text class="axis-name" x={0} y={-10}>
          Variables With Missing Values
        </text>
        <g class="samplingAxis" on:click={handleSamplingVariableClick}>
          {#each columns as columnMissing, i}
            {#if columnsWithMissingValues.includes(columnMissing)}
              <g
                class="samplingAxisElements"
                opacity={selectedSamplingVariables.includes(i) || selectedSamplingVariables.length === 0 ? 1 : 0.2}>
                <rect
                  class="axis-tick"
                  x={-10}
                  y={samplingScale(columnMissing)}
                  width={10}
                  height={samplingScale.bandwidth()} />
                {#if selectedRatioInterval[0] !== 1 || selectedRatioInterval[1] !== 0}
                  <rect
                    fill="black"
                    x={-10}
                    y={samplingScale(columnMissing)}
                    width={10}
                    height={samplingScale.bandwidth() * getAmountOfSelectedInLine(i, selectedRatioInterval)} />
                {/if}
                <text
                  class="axis-tick"
                  cursor="pointer"
                  column={i}
                  column-name={columnMissing}
                  x={-12}
                  y={samplingScale(columnMissing) + samplingScale.bandwidth() / 2}
                  text-anchor="end"
                  alignment-baseline="middle">
                  {columnMissing + ` (${binsMatrix[i][i][binsMatrix[i][i].length - 1].count})`}
                </text>
              </g>
            {/if}
          {/each}
        </g>

      </g>
      <g
        class="measurement-axis"
        on:click={handleMeasurementVariableClick}
        transform="translate({innerWidth},0)">
        <text class="axis-name" x={+5} y={-10}>Variables</text>
        {#each columns as column, j}
          <g
            class="samplingAxisElements"
            opacity={selectedMeasurementVariables.includes(j) || selectedMeasurementVariables.length === 0 ? 1 : 0.2}>
            <rect
              class="axis-tick"
              x={0}
              y={measurementScale(column)}
              width={10}
              height={measurementScale.bandwidth()} />
            {#if selectedRatioInterval[0] !== 1 || selectedRatioInterval[1] !== 0}
              <rect
                fill="black"
                x={0}
                y={measurementScale(column)}
                width={10}
                height={measurementScale.bandwidth() * getAmountOfSelectedInColumn(j, selectedRatioInterval)} />
            {/if}
            <text
              class="axis-tick"
              cursor="pointer"
              column={j}
              x={12}
              y={measurementScale(column) + measurementScale.bandwidth() / 2}
              text-anchor="start"
              alignment-baseline="middle">
              {column}
            </text>
          </g>
        {/each}
      </g>
      <g class="ratio-axis" transform="translate({innerWidth / 2},0)">
        <text class="axis-name" x={-5} y={-10}>MAR Likelyhood</text>
        <rect class="axis-tick" x={-15} width={30} y={0} height={innerHeight} />
        {#each [5, 6,7, 7.5,8,8.5,9,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9] as i}
          <text
            class="axis-tick"
            text-anchor="middle"
            alignment-baseline="middle"
            y={ratioScale(i * 10)}>
            {(i * 10).toFixed(0) + '%'}
          </text>
        {/each}

      </g>
      <g class="color-legend" transform="translate(0,{innerHeight + 5})">
        {#each range(1000) as i}
          <rect
            y={margin.bottom / 6}
            x={i * ((innerWidth - 100) / 1000)}
            width={(innerWidth - 100) / 1000 + 1}
            height={margin.bottom / 5}
            fill={interpolate(i / 1000)} ></rect>
        {/each}


        <rect
                y={margin.bottom / 6}
                x={(innerWidth - 75)}
                width={75}
                height={margin.bottom / 5}
                stroke="#71706F"
                fill={color("darkseagreen").darker()}>
        </rect>

        <rect
          y={margin.bottom / 6}
          x={0}
          stroke="black"
          stroke-width="1"
          width={innerWidth - 100}
          height={margin.bottom / 5}
          fill="none"></rect>
        <g
          class="color-axis"
          bind:this={colorAxisDOM}
          transform="translate(0,{margin.bottom / 6 + margin.bottom / 5})" ></g>
        <text
          class="axis-name"
          alignment-baseline="hanging"
          x={(innerWidth - 100) * 0.5}
          y={margin.bottom / 6 + margin.bottom / 2}>
          <!-- 10 is for print mode -->
          {'Co-Missing Occurrence Rate'}
        </text>

        <text
          text-anchor="start"
          alignment-baseline="hanging"
          font-size="0.7em"
          x={0}
          y={0}>
          <!-- 8 is for print mode -->
          {'< Too little'}
        </text>
        <text
                text-anchor="middle"
                alignment-baseline="hanging"
                font-size="0.7em"
                x={innerWidth - 75 / 2}
                y={0}>
          <!-- 8 is for print mode -->
          {'Not Applicable'}
        </text>
        <text
                text-anchor="middle"
                alignment-baseline="hanging"
                font-size="0.7em"
                x={(innerWidth - 100)/2}
                y={0}>
          <!-- 8 is for print mode -->
          {'Natural occurrence'}
        </text>
        <text
          text-anchor="end"
          alignment-baseline="hanging"
          font-size="0.7em"
          x={innerWidth - 100}
          y={0}>
          <!-- 8 is for print mode -->
          {'Too Much >'}
        </text>
      </g>
    </g>
    <g class="brushLayer">
      <g class="ratio-brush" bind:this={ratioBrushDOM} />
    </g>
  </g>
</g>
