<script>
  import { canvasWidth, canvasHeight } from "../../stores.js";
  import { select } from "d3-selection";
  import { scaleLinear, scaleBand } from "d3-scale";
  import { axisLeft, axisRight, axisBottom } from "d3-axis";
  import { line } from "d3-shape";
  import { path } from "d3-path";
  import { range, mean } from "d3-array";
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
    .range([0, innerWidth]);

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
      return crossess / (filtered.length - 2);
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
</script>

<style>
  path.data {
    fill: none;
    stroke-width: 1px;
    opacity: 0.7;
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
  <rect
    width={width * $canvasWidth}
    height={height * $canvasHeight}
    fill="none"
    stroke="dimgray" />
  <g class="marginConvention" transform="translate({margin.left},{margin.top})">
    <g class="background">

      <g class="color-legend" transform="translate(0,{innerHeight})">
        {#each range(1000) as i}
          <rect
            y={margin.bottom / 6}
            x={i * (innerWidth / 1000)}
            width={innerWidth / 1000 + 1}
            height={margin.bottom / 5}
            fill={interpolateRdYlBu(i / 1000)} />
        {/each}
        <g
          class="color-axis"
          bind:this={colorAxisDOM}
          transform="translate(0,{margin.bottom / 6 + margin.bottom / 5})" />
        <text
          class="axis-name"
          alignment-baseline="hanging"
          x={innerWidth / 2}
          y={margin.bottom / 6 + margin.bottom / 2}>
          % of High Frequency Noise Behavior (Quantitative and Ordinal Only)
        </text>
      </g>
    </g>
    <g class="foreground">
      {#each columns as iName, i}
        {#each columns as jName, j}
          {#if i !== j && arcdata[i][j] !== null}
            <path
              class="data"
              stroke={columnTypes[j] === 'Ordinal' || columnTypes[j] === 'Quantitative' ? interpolateRdYlBu(crossdata[i][j]) : 'dimgray'}
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
        {#each columnsWithMissingValues as columnMissing}
          <rect
            class="axis-tick"
            x={-10}
            y={samplingScale(columnMissing)}
            width={10}
            height={samplingScale.bandwidth()} />
          <text
            class="axis-tick"
            x={-12}
            y={samplingScale(columnMissing) + samplingScale.bandwidth() / 2}
            text-anchor="end"
            alignment-baseline="middle">
            {columnMissing}
          </text>
        {/each}
      </g>
      <g class="measurement-axis" transform="translate({innerWidth},0)">
        <text class="axis-name" x={+5} y={-10}>Variables</text>
        {#each columns as column}
          <rect
            class="axis-tick"
            x={0}
            y={measurementScale(column)}
            width={10}
            height={measurementScale.bandwidth()} />
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
    </g>
  </g>
</g>
