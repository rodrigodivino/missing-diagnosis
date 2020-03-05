<script>
import Arc from './visualizations/Arc.svelte';
import {getQQPoints} from '../utils/data-processing'
import {computeMCARProbabilities} from "../utils/compute-probabilities"
import {canvasWidth, canvasHeight} from "../stores";
import {mean} from "d3-array"

export let data;

console.log(computeMCARProbabilities(data, data.columns))
// $: QQpoints = getQQPoints(data);

// $: BeeswarmData = QQpoints.map(d=> ({
// 	treatmentVariable: d.treatmentVariable,
// 	measurementVariable: d.measurementVariable,
// 	averageMagnitude: mean(d.points, v=>v.mag)
// }))


</script>


<svg width={$canvasWidth} height={$canvasHeight}>

	<Arc x={0} y={0} width={1} height={1} data={data}></Arc>
</svg>

<style>

</style>