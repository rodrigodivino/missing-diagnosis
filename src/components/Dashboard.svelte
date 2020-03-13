<script>
  import Matrix from "./visualizations/Matrix.svelte";
  import Arc from "./visualizations/Arc.svelte";
  import Progress from "./visualizations/Progress.svelte";
  import { computeEstimativeMatrix } from "../utils/compute-probabilities";
  import { canvasWidth, canvasHeight } from "../stores";
  import { mean } from "d3-array";
  import { onMount, tick } from "svelte";

  export let data;

  const [
    estimativeMatrix,
    binsMatrix,
    refineEstimative
  ] = computeEstimativeMatrix(data, data.validColumns, data.types);
  const columnsWithMissingValues = data.columnsWithMissingValues;

  let convergence = 100;
</script>

<style>

</style>

<svg width={$canvasWidth} height={$canvasHeight}>
  <Progress x={0} y={0} width={1} height={0.05} {convergence} />
  <!-- <Matrix
    x={0}
    y={progress < 1 ? 0.05 : 0}
    width={1}
    height={progress < 1 ? 0.95 : 1}
    colordata={estimativeMatrix}
    glyphdata={binsMatrix}
    columns={data.columns}
    columnTypes={data.types}
    {columnsWithMissingValues}
    refine={refineEstimative}
    bind:progress /> -->
  <Arc
    x={0}
    y={0.05}
    width={1}
    height={0.95}
    arcdata={estimativeMatrix}
    colordata={binsMatrix}
    columns={data.columns}
    columnTypes={data.types}
    {columnsWithMissingValues}
    refine={refineEstimative}
    bind:convergence />
</svg>
