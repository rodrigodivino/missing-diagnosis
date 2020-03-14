<script>
  import { scaleLinear, scaleBand } from "d3-scale";
  import { max, sum, range } from "d3-array";
  import { axisLeft, axisBottom } from "d3-axis";
  import { select } from "d3-selection";

  export let width;
  export let height;
  export let totalBins;
  export let expectedBins;
  export let sampleBins;
  export let fill;

  const margin = { top: 35, left: 35, right: 35, bottom: 35 };
  $: sampleSize = sum(sampleBins.map(b => b.count));
  $: innerWidth = width - margin.left - margin.right;
  $: innerHeight = height - margin.top - margin.bottom;

  $: xScale = scaleBand()
    .domain(totalBins.filter(b => b.count > 0).map(b => b.name))
    .range([0, innerWidth]);
  $: yScale = scaleLinear()
    .domain([-sampleSize, sampleSize])
    .range([innerHeight, 0]);

  $: xAxis = axisBottom(xScale);
  $: yAxis = axisLeft(yScale).ticks(6);

  $: barWidth = xScale.bandwidth();
  const barPadding = 2;

  let xAxisDOM, yAxisDOM;
  const placeLegends = (xAxisDOM, yAxisDOM, xAxis, yAxis) => {
    if (xAxisDOM && yAxisDOM && xScale && yScale) {
      const xg = select(xAxisDOM);
      const yg = select(yAxisDOM);
      xg.selectAll().remove();
      yg.selectAll().remove();
      xg.call(xAxis);
      yg.call(yAxis);
    }
  };
  $: placeLegends(xAxisDOM, yAxisDOM, xAxis, yAxis);
</script>

<style>

</style>

<g>
  <rect {fill} {width} {height} />
  <rect fill="white" x={5} y={5} width={width - 10} height={height - 10} />
  <g
    class="margin-convention"
    transform="translate({margin.left}, {margin.top})">
    <rect fill="white" {innerWidth} {innerHeight} />
    <g class="background">
      <rect width={innerWidth} height={innerHeight} fill="white" />
      <g
        class="x-axis"
        transform="translate(0,{innerHeight})"
        bind:this={xAxisDOM} />
      <g class="y-axis" bind:this={yAxisDOM} />
    </g>
    <g class="foreground">
      {#each totalBins as bin, i}
        {#if bin.count > 0}
          <rect
            class="sample"
            x={xScale(bin.name) + barPadding / 2}
            y={Math.min(yScale(sampleBins[i].count - expectedBins[i].count), yScale(0))}
            height={Math.abs(yScale(sampleBins[i].count - expectedBins[i].count) - yScale(0))}
            fill={yScale(sampleBins[i].count) - yScale(expectedBins[i].count) > 0 ? 'firebrick' : 'steelblue'}
            width={barWidth - barPadding} />
        {/if}
      {/each}
    </g>
  </g>
</g>
