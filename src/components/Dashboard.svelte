<script>
import Matrix from './visualizations/Matrix.svelte';
import {computeEstimativeMatrix} from "../utils/compute-probabilities"
import {canvasWidth, canvasHeight} from "../stores";
import {mean} from "d3-array"
import {onMount, tick} from "svelte";

export let data;


const columnTypes = data.columns.map(()=>"Continuous")
const [estimativeMatrix, binsMatrix, refineEstimative] = computeEstimativeMatrix(data, data.columns, columnTypes);




</script>


<svg width={$canvasWidth} height={$canvasHeight}>

	<Matrix x={0} y={0} width={1} height={1}
	colordata={estimativeMatrix}
	glyphdata={binsMatrix}
	columns={data.columns} refine={refineEstimative}></Matrix>
</svg>

<style>

</style>