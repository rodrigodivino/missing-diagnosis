<script>
  import { canvasWidth, canvasHeight } from "../../stores.js";
  import { select, mouse } from "d3-selection";
  import { scaleLinear, scaleBand } from "d3-scale";
  import { axisLeft, axisBottom } from "d3-axis";
  import { line } from "d3-shape";
  import { path } from "d3-path";
  import { max, ascending } from "d3-array";
  import { interpolateViridis, interpolateSpectral } from "d3-scale-chromatic";
  import { afterUpdate, onMount, tick } from "svelte";
  import {
    quantization as vsupQuantization,
    squareQuantization as vsupSquare,
    scale as vsupScale,
    legend as vsupLegend
  } from "vsup";
  import Tooltip from "./Tooltip.svelte";

  export let x = 0;
  export let y = 0;
  export let width = 1;
  export let height = 1;
  export let colordata;
  const setColordata = newColordata => {
    setTimeout(() => {
      colordata = newColordata;
    }, 1);
  };
  export let glyphdata;
  export let columns;
  export let columnsWithMissingValues;
  export let columnTypes;
  export let refine;
  export let progress;

  const margin = { top: 50, bottom: 100, left: 100, right: 200 };
  const cellMargin = { top: 1, left: 1, right: 1, bottom: 1 };
  $: innerWidth = width * $canvasWidth - margin.left - margin.right;
  $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

  $: xScale = scaleBand()
    .domain(columns)
    .range([0, innerWidth]);
  $: yScale = scaleBand()
    .domain(columnsWithMissingValues)
    .range([innerHeight, 0]);
  $: cellWidth = xScale.bandwidth() - cellMargin.left - cellMargin.right;
  $: cellHeight = yScale.bandwidth() - cellMargin.top - cellMargin.bottom;
  $: xAxis = axisBottom(xScale);
  $: yAxis = axisLeft(yScale);
  $: refineLevel = colordata[1][1];

  $: quantization = vsupQuantization()
    .branching(2)
    .layers(4)
    .valueDomain([0, 1])
    .uncertaintyDomain([0, 1]);
  $: colorScale = vsupScale()
    .quantize(quantization)
    .range(v => interpolateSpectral(1 - v));

  $: tooltipWidth = innerWidth / 2;
  $: tooltipHeight = innerHeight / 4;

  let tooltipPosition = [null, null];
  let tooltipContent = [null, null];

  const getGlyphPaths = (cellWidth, cellHeight, glyphdata) => {
    const glyphPaths = new Array(columns.length)
      .fill(0)
      .map(() => new Array(columns.length).fill(null));
    for (let i = 0; i < columns.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        if (i !== j && colordata[i][j] !== null) {
          const nBins = glyphdata[j][j].length;
          const totalBins = glyphdata[j][j].map(b => b.count);
          const expectedBins = glyphdata[i][j][0].map(b => b.count);
          const sampleBins = glyphdata[i][j][1].map(b => b.count);
          const maxDev = Math.abs(max(totalBins) - max(expectedBins));
          const maxGap = Math.max(maxDev, max(totalBins) - maxDev);
          const devArray = sampleBins.map((c, i) => c - expectedBins[i]);

          const lineGen = line()
            .x((c, i) => (i / (nBins - 1)) * cellWidth)
            .y(c => cellHeight - ((c + maxGap) / (2 * maxGap)) * cellHeight);

          const path = lineGen(devArray);

          glyphPaths[i][j] =
            `M${0},${cellHeight / 2}L` +
            path.slice(1, path.length) +
            `L${cellWidth},${cellHeight / 2}`;
        }
      }
    }
    return glyphPaths;
  };
  $: glyphPaths = getGlyphPaths(cellWidth, cellHeight, glyphdata);

  const getCrossData = glyphdata => {
    const crossdata = new Array(columns.length)
      .fill(0)
      .map(() => new Array(columns.length).fill(null));
    const countCrosses = diffArray => {
      const filtered = diffArray.filter(v => v !== 0);
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
        if (i !== j && columnsWithMissingValues.includes(columns[i])) {
          const expectedCount = glyphdata[i][j][0].map(b => b.count);
          const sampleCount = glyphdata[i][j][1].map(b => b.count);
          const diffArray = expectedCount.map((c, i) => c - sampleCount[i]);
          crossdata[i][j] = countCrosses(diffArray);
        }
      }
    }
    return crossdata;
  };
  $: crossdata = getCrossData(glyphdata);

  const maxRefineLevel = 1000;
  const updateData = async colordata => {
    if (refineLevel <= maxRefineLevel) {
      const nextColor = await refine(colordata, 100);
      progress = refineLevel / maxRefineLevel;
      setColordata(nextColor);
    } else {
      progress = 1;
    }
  };
  $: updateData(colordata);

  $: colorLegend = vsupLegend
    .arcmapLegend()
    .scale(colorScale)
    .size(margin.right - 50 - 25)
    .x(25)
    .y(0)
    .vtitle("Chance of Error in MCAR")
    .utitle("Noisy Behavior");

  let xAxisDOM, yAxisDOM, colorLegendDOM;
  const placeLegends = (
    xAxisDOM,
    yAxisDOM,
    colorLegendDOM,
    xAxis,
    yAxis,
    colorLegend
  ) => {
    if (
      xAxisDOM &&
      yAxisDOM &&
      colorLegendDOM &&
      xScale &&
      yScale &&
      colorLegend
    ) {
      const xg = select(xAxisDOM);
      const yg = select(yAxisDOM);
      const cg = select(colorLegendDOM);
      xg.selectAll().remove();
      yg.selectAll().remove();
      cg.selectAll().remove();
      xg.call(xAxis)
        .selectAll("text")
        .attr("x", xScale.bandwidth() / 2)
        .attr("y", -xScale.bandwidth() / 4)
        .attr("transform", "rotate(90)")
        .attr("alignment-baseline", "middle")
        .style("text-anchor", "start");
      yg.call(yAxis);
      cg.call(colorLegend);
      cg.selectAll("g")
        .selectAll("g.tick")
        .selectAll("text")
        .text(t => (t * 100).toFixed(0) + "%");
    }
  };
  $: placeLegends(
    xAxisDOM,
    yAxisDOM,
    colorLegendDOM,
    xAxis,
    yAxis,
    colorLegend
  );

  let foreground;
  onMount(() => {
    select(foreground).on("mousemove", e => {
      const rect = select(event.target);
      const i = rect.attr("i");
      const j = rect.attr("j");

      const coords = mouse(foreground);
      const x =
        coords[0] < tooltipWidth
          ? coords[0] + 10
          : coords[0] - tooltipWidth - 10;
      const y =
        coords[1] < tooltipHeight
          ? coords[1] + 10
          : coords[1] - tooltipHeight - 10;
      tooltipPosition = [x, y];

      if (i === null && j === null) {
        tooltipContent = [null, null];
      } else if (tooltipContent[0] !== i || tooltipContent[1] !== j) {
        tooltipContent = [+i, +j];
      }
    });
  });

  const handleColor = (i, j) => {
    if (columnTypes[j] === "Quantitative" || columnTypes[j] === "Ordinal") {
      return colorScale(colordata[i][j], crossdata[i][j]);
    } else {
      return colorScale(colordata[i][j], 0);
    }
  };
</script>

<style>
  path.glyph {
    stroke: none;
    stroke-width: 1px;
    fill: white;
    opacity: 0.8;
  }

  path.glyph {
    pointer-events: none;
  }

  rect.cell {
    stroke-width: 2px;
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
      <g
        class="x-axis"
        bind:this={xAxisDOM}
        transform="translate(0,{innerHeight})" />
      <g class="y-axis" bind:this={yAxisDOM} />
      <g class="colorLegend" transform="translate({innerWidth},100)">
        <g bind:this={colorLegendDOM} />
      </g>

    </g>
    <g bind:this={foreground} class="foreground">
      {console.log(glyphdata)}
      {#each columns as iName, i}
        {#each columns as jName, j}
          {#if i !== j && colordata[i][j] !== null}
            <g
              transform="translate({cellMargin.left + xScale(jName)},{cellMargin.top + yScale(iName)})">
              <rect
                {i}
                {j}
                class="cell"
                width={cellWidth}
                height={cellHeight}
                stroke={tooltipContent[0] === i && tooltipContent[1] === j ? 'black' : 'none'}
                stroke-width="2px"
                fill={handleColor(i, j)} />
              <!-- <path class="glyph" d={glyphPaths[i][j]}></path> -->
            </g>
          {:else if columnsWithMissingValues.includes(iName) && i === j}
            <g
              transform="translate({cellMargin.left + xScale(jName)},{cellMargin.top + yScale(iName)})">
              <rect
                i={null}
                j={null}
                class="nullCell"
                width={cellWidth}
                height={cellHeight}
                fill="white" />
            </g>
          {/if}
        {/each}
      {/each}
      {#if tooltipContent[0] !== null && tooltipContent[1] !== null}
        <g transform="translate({tooltipPosition[0]},{tooltipPosition[1]})">
          <Tooltip
            width={tooltipWidth}
            height={tooltipHeight}
            totalBins={glyphdata[tooltipContent[1]][tooltipContent[1]]}
            expectedBins={glyphdata[tooltipContent[0]][tooltipContent[1]][0]}
            sampleBins={glyphdata[tooltipContent[0]][tooltipContent[1]][1]} />
        </g>
      {/if}
    </g>
  </g>

</g>

