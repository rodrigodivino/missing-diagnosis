<script>
import Arc from './visualizations/Arc.svelte';
import {getQQPoints} from '../utils/data-processing'
import {computeMCARProbabilities, computeErrorMatrix} from "../utils/compute-probabilities"
import {canvasWidth, canvasHeight} from "../stores";
import {mean} from "d3-array"

export let data;

const probabilityData = computeErrorMatrix(data, data.columns, data.columns.map(()=>"Continuous"));
probabilityData.columns = data.columns;
// $: QQpoints = getQQPoints(data);

// $: BeeswarmData = QQpoints.map(d=> ({
// 	treatmentVariable: d.treatmentVariable,
// 	measurementVariable: d.measurementVariable,
// 	averageMagnitude: mean(d.points, v=>v.mag)
// }))


</script>


<svg width={$canvasWidth} height={$canvasHeight}>

	<Arc x={0} y={0} width={1} height={1} data={probabilityData}></Arc>
</svg>

<style>

</style>