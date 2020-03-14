<script>
  import { canvasWidth, canvasHeight } from "../../stores.js";
  import { select, event } from "d3-selection";
  import { scaleLinear, scaleBand } from "d3-scale";
  import { axisLeft, axisRight, axisBottom } from "d3-axis";
  import { line } from "d3-shape";
  import { path } from "d3-path";
  import { range, mean } from "d3-array";
  import { brushY } from "d3-brush";
  import { onMount } from "svelte";
  import { interpolateRdYlBu, interpolateYlOrRd } from "d3-scale-chromatic";

  export let x = 0;
  export let y = 0;
  export let width = 1;
  export let height = 1;
  export let arcdata;
  const setArcdata = newArcdata => {
    setTimeout(() => {
      arcdata = newArcdata;
    }, 1);
  };
  export let colordata;
  export let columns;
  export let columnTypes;
  export let columnsWithMissingValues;
  export let refine;
  export let convergence;

  const margin = { top: 50, bottom: 75, left: 120, right: 120 };
  $: innerWidth = width * $canvasWidth - margin.left - margin.right;
  $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

  $: ratioScale = scaleLinear()
    .domain([0, 1])
    .range([innerHeight, 0]);
  $: samplingScale = scaleBand()
    .domain(columnsWithMissingValues)
    .range([innerHeight, 0])
    .paddingInner(0.2);

  $: measurementScale = scaleBand()
    .domain(columns)
    .range([innerHeight, 0])
    .paddingInner(0.2);

  $: colorScale = scaleLinear()
    .domain([0, 1])
    .range([innerWidth * 0.2, innerWidth]);

  $: ratioAxis = axisLeft(ratioScale);

  $: colorAxis = axisBottom(colorScale);

  $: refineLevel = arcdata[1][1];

  let colorAxisDOM;
  const placeAxes = (colorAxisDOM, colorAxis) => {
    if (colorAxisDOM && colorAxis) {
      const cg = select(colorAxisDOM);
      cg.selectAll().remove();
      cg.call(colorAxis)
        .selectAll("g.tick")
        .selectAll("text")
        .text(t => +t * 100 + "%");
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

    const sourceY = samplingScale(source) + (1 - value) * samplingBand;
    const sourceX = 0;
    const valueY = ratioScale(value);
    const valueX = innerWidth / 2;
    const targetY = measurementScale(target) + (1 - value) * measurementBand;
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

  const errorThreshold = 0.5;
  const updateData = async arcdata => {
    const nextdata = await refine(arcdata, 1);
    let maxError = -Infinity;
    for (let i = 0; i < columns.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        if (i !== j && arcdata[i][j] !== null) {
          const diff = Math.abs(arcdata[i][j] - nextdata[i][j]) * 100;
          maxError = diff > maxError ? diff : maxError;
        }
      }
    }

    if (maxError >= errorThreshold) {
      setArcdata(nextdata);
    }
    convergence = maxError;
  };
  $: updateData(arcdata);

  const getCrossData = colordata => {
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
          const expectedCount = colordata[i][j][0].map(b => b.count);
          const sampleCount = colordata[i][j][1].map(b => b.count);
          const diffArray = expectedCount.map((c, i) => c - sampleCount[i]);
          crossdata[i][j] = countCrosses(diffArray);
        }
      }
    }
    return crossdata;
  };
  $: crossdata = getCrossData(colordata);

  let selectedRatioInterval = [1, 0];
  let valueIsSelected = value =>
    value <= selectedRatioInterval[0] && value >= selectedRatioInterval[1];
  let ratioBrushDOM;
  $: ratioBrush = brushY()
    .extent([[innerWidth / 2 - 13, 0], [innerWidth / 2 + 14, innerHeight]])
    .on("brush end", () => {
      if (event.selection) {
        selectedRatioInterval = event.selection.map(ratioScale.invert);
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

  const handlePathColor = (i, j, value, selectedRatioInterval) => {
    if (valueIsSelected(value)) {
      if (columnTypes[j] === "Ordinal" || columnTypes[j] === "Quantitative") {
        return interpolateRdYlBu(crossdata[i][j]);
      } else {
        return "darkseagreen";
      }
    } else {
      return "lightgray";
    }
  };
  const handlePathClass = (i, j, value, selectedRatioInterval) => {
    if (valueIsSelected(value)) {
      if (selectedRatioInterval[0] === 1 && selectedRatioInterval[1] === 0) {
        return "data";
      } else {
        return "dataSelected";
      }
    } else {
      return "dataNotSelected";
    }
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
</script>

<style>
  path.data {
    fill: none;
    stroke-width: 3px;
    opacity: 0.4;
  }

  path.dataNotSelected {
    fill: none;
    stroke-width: 1px;
    opacity: 0.2;
  }

  path.dataSelected {
    fill: none;
    stroke-width: 3px;
    opacity: 0.9;
  }

  path.data:hover {
    stroke-width: 4px;
    opacity: 1;
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    30% {
      stroke: black;
      stroke-width: 5px;
    }
    70% {
      stroke: black;
      stroke-width: 5px;
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
    font-size: 1em;
  }
</style>

<g
  class="outerRing"
  transform="translate({x * $canvasWidth}, {y * $canvasHeight})">

  <g class="marginConvention" transform="translate({margin.left},{margin.top})">
    <g class="background" />
    <g class="foreground">
      {#each columns as iName, i}
        {#each columns as jName, j}
          {#if i !== j && arcdata[i][j] !== null}
            <path
              class={handlePathClass(i, j, arcdata[i][j], selectedRatioInterval)}
              stroke={handlePathColor(i, j, arcdata[i][j], selectedRatioInterval)}
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
        {#each columns as columnMissing, i}
          {#if columnsWithMissingValues.includes(columnMissing)}
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
              x={-12}
              y={samplingScale(columnMissing) + samplingScale.bandwidth() / 2}
              text-anchor="end"
              alignment-baseline="middle">
              {columnMissing}
            </text>
          {/if}
        {/each}
      </g>
      <g class="measurement-axis" transform="translate({innerWidth},0)">
        <text class="axis-name" x={+5} y={-10}>Variables</text>
        {#each columns as column, j}
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
            x={12}
            y={measurementScale(column) + measurementScale.bandwidth() / 2}
            text-anchor="start"
            alignment-baseline="middle">
            {column}
          </text>
        {/each}
      </g>
      <g class="ratio-axis" transform="translate({innerWidth / 2},0)">
        <text class="axis-name" x={-5} y={-10}>Chance of MAR</text>
        <rect class="axis-tick" x={-15} width={30} y={0} height={innerHeight} />
        {#each range(1, 10) as i}
          <text
            class="axis-tick"
            text-anchor="middle"
            alignment-baseline="middle"
            y={ratioScale(i / 10)}>
            {i * 10 + '%'}
          </text>
        {/each}

      </g>
      <g class="color-legend" transform="translate(0,{innerHeight})">
        {#each range(1000) as i}
          <rect
            y={margin.bottom / 6}
            x={innerWidth * 0.2 + i * ((innerWidth * 0.8) / 1000)}
            width={(innerWidth * 0.8) / 1000 + 1}
            height={margin.bottom / 5}
            fill={interpolateRdYlBu(1 - i / 1000)} />
        {/each}
        <rect
          y={margin.bottom / 6 + margin.bottom / 8}
          x={0}
          stroke="black"
          stroke-width="1"
          width={innerWidth * 0.18}
          height={margin.bottom / 5}
          fill="mediumseagreen" />

        <rect
          y={margin.bottom / 6}
          x={innerWidth * 0.2}
          stroke="black"
          stroke-width="1"
          width={innerWidth * 0.8}
          height={margin.bottom / 5}
          fill="none" />
        <g
          class="color-axis"
          bind:this={colorAxisDOM}
          transform="translate(0,{margin.bottom / 6 + margin.bottom / 5})" />
        <text
          class="axis-name"
          alignment-baseline="hanging"
          x={innerWidth * 0.09}
          y={margin.bottom / 6 + margin.bottom / 2 - margin.bottom / 8}>
          {'Categorical'}
        </text>
        <text
          class="axis-name"
          alignment-baseline="hanging"
          x={innerWidth * 0.2 + (innerWidth * 0.8) / 2}
          y={margin.bottom / 6 + margin.bottom / 2}>
          {'Distribution Consistence (Ordered Data Only)'}
        </text>
        <text
          text-anchor="start"
          alignment-baseline="hanging"
          font-size="0.7em"
          x={innerWidth * 0.2}
          y={0}>
          {'< MCAR'}
        </text>
        <text
          text-anchor="end"
          alignment-baseline="hanging"
          font-size="0.7em"
          x={innerWidth}
          y={0}>
          {'MAR >'}
        </text>
      </g>
    </g>
    <g class="brushLayer">
      <g class="ratio-brush" bind:this={ratioBrushDOM} />
    </g>
  </g>
</g>
