<script>
  import { canvasWidth, canvasHeight } from "../../stores.js";
  import { select } from "d3-selection";
  import { scaleLinear, scaleBand } from "d3-scale";
  import { axisLeft, axisRight, axisBottom } from "d3-axis";
  import { line } from "d3-shape";
  import { path } from "d3-path";
  import { range } from "d3-array";
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
  export let progress;

  const margin = { top: 50, bottom: 75, left: 120, right: 120 };
  $: innerWidth = width * $canvasWidth - margin.left - margin.right;
  $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

  $: ratioScale = scaleLinear()
    .domain([0, 1])
    .range([innerHeight, 0]);
  $: samplingScale = scaleBand()
    .domain(columnsWithMissingValues)
    .range([innerHeight, 0])
    .padding(0.1);

  $: measurementScale = scaleBand()
    .domain(columns)
    .range([innerHeight, 0])
    .padding(0.1);

  $: colorScale = scaleLinear()
    .domain([0, 1])
    .range([0, innerWidth]);

  $: ratioAxis = axisLeft(ratioScale);

  $: colorAxis = axisBottom(colorScale);

  $: refineLevel = arcdata[1][1];

  let ratioAxisDOM, colorAxisDOM;
  const placeAxes = (ratioAxisDOM, colorAxisDOM, ratioAxis, colorAxis) => {
    if (ratioAxisDOM && ratioAxis && colorAxisDOM && colorAxis) {
      const rg = select(ratioAxisDOM);
      const cg = select(colorAxisDOM);
      rg.selectAll().remove();
      cg.selectAll().remove();
      rg.call(ratioAxis);
      cg.call(colorAxis)
        .selectAll("g.tick")
        .selectAll("text")
        .text(t => +t * 100 + "%");
    }
  };
  $: placeAxes(ratioAxisDOM, colorAxisDOM, ratioAxis, colorAxis);

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

    const sourceY = samplingScale(source) + samplingBand / 2;
    const sourceX = 0;
    const valueY = ratioScale(value);
    const valueX = innerWidth / 2;
    const targetY = measurementScale(target) + measurementBand / 2;
    const targetX = innerWidth;

    const xDisplacement = innerWidth / 4;

    p.moveTo(0, sourceY);

    p.bezierCurveTo(
      sourceX + xDisplacement,
      sourceY,
      valueX - xDisplacement,
      valueY,
      valueX,
      valueY
    );

    p.bezierCurveTo(
      valueX + xDisplacement,
      valueY,
      targetX - xDisplacement,
      targetY,
      targetX,
      targetY
    );

    return p.toString();
  };

  const maxRefineLevel = 1000;
  const updateData = async arcdata => {
    let step;
    if (progress < 0.1) step = 1;
    else if (progress < 0.5) step = 10;
    else step = 100;

    if (refineLevel <= maxRefineLevel) {
      const nextArc = await refine(arcdata, step);
      progress = refineLevel / maxRefineLevel;
      setArcdata(nextArc);
    } else {
      progress = 1;
    }
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

  text.color-axis-label {
    text-anchor: middle;
    font-size: 1em;
  }

  rect.categorical-tick {
    fill: white;
    stroke: black;
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
      <g class="sampling-axis">
        {#each columnsWithMissingValues as columnMissing}
          <rect
            class="categorical-tick"
            x={-10}
            y={samplingScale(columnMissing)}
            width={10}
            height={samplingScale.bandwidth()} />
          <text
            x={-12}
            y={samplingScale(columnMissing) + samplingScale.bandwidth() / 2}
            text-anchor="end"
            font-size=".7em"
            alignment-baseline="middle">
            {columnMissing}
          </text>
        {/each}
      </g>
      <g
        class="ratio-axis"
        bind:this={ratioAxisDOM}
        transform="translate({innerWidth / 2},0)" />

      <g class="measurement-axis" transform="translate({innerWidth},0)">
        {#each columns as column}
          <rect
            class="categorical-tick"
            x={0}
            y={measurementScale(column)}
            width={10}
            height={measurementScale.bandwidth()} />
          <text
            x={12}
            y={measurementScale(column) + measurementScale.bandwidth() / 2}
            text-anchor="start"
            font-size=".7em"
            alignment-baseline="middle">
            {column}
          </text>
        {/each}
      </g>
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
          class="color-axis-label"
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
  </g>
</g>
