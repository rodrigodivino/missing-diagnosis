<script>
  import { canvasWidth, canvasHeight } from "../../stores.js";
  export let x = 0;
  export let y = 0;
  export let width = 1;
  export let height = 1;
  export let progress = 1;

  const margin = { top: 2, bottom: 2, left: 0, right: 0 };
  $: innerWidth = width * $canvasWidth - margin.left - margin.right;
  $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;
</script>

<style>
  rect.background {
    fill: slategray;
  }
  rect.foreground {
    fill: mediumseagreen;
  }
  text.label {
    stroke: black;
    font-weight: bold;
    text-anchor: end;
    alignment-baseline: middle;
  }
</style>

<g
  class="outerRing"
  transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
  <g class="marginConvention" transform="translate({margin.left},{margin.top})">
    <rect class="background" width={innerWidth} height={innerHeight} />
    <rect
      class="foreground"
      width={innerWidth * progress}
      height={innerHeight} />
    <text class="label" x={innerWidth * progress} y={innerHeight / 2}>
      {(progress * 100).toFixed(2)}%
    </text>
  </g>
</g>
