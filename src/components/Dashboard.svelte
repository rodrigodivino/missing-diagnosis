<script>
import Matrix from './visualizations/Matrix.svelte';
import Progress from './visualizations/Progress.svelte';
import {computeEstimativeMatrix} from "../utils/compute-probabilities"
import {canvasWidth, canvasHeight} from "../stores";
import {mean} from "d3-array"
import {onMount, tick} from "svelte";

export let data;


const [estimativeMatrix, binsMatrix, refineEstimative] = computeEstimativeMatrix(data, data.validColumns, data.types);
const columnsWithMissingValues = data.columnsWithMissingValues;

let progress = 0;

</script>


<svg width={$canvasWidth} height={$canvasHeight}>
	{#if progress < 1}
		<Progress x={0} y={0} width={1} height={.05} {progress}></Progress>
	{/if}
	<Matrix x={0} y={progress<1?.05:0} width={1} height={progress<1?.95:1}
	colordata={estimativeMatrix}
	glyphdata={binsMatrix}
	columns={data.columns}
	columnTypes={data.types}
	
	{columnsWithMissingValues}
	refine={refineEstimative}
	bind:progress
	></Matrix>
</svg>

<style>

</style>