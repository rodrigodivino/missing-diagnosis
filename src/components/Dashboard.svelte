<script>
import Arc from './visualizations/Arc.svelte';
import {getQQPoints} from '../utils/data-processing'
import {computeMCARProbabilities, computeErrorMatrix, RefineEstimative} from "../utils/compute-probabilities"
import {canvasWidth, canvasHeight} from "../stores";
import {mean} from "d3-array"

export let data;

// const probabilityData = computeErrorMatrix(data, data.columns, data.columns.map(()=>"Continuous"));
// probabilityData.columns = data.columns;
// $: QQpoints = getQQPoints(data);

// $: BeeswarmData = QQpoints.map(d=> ({
// 	treatmentVariable: d.treatmentVariable,
// 	measurementVariable: d.measurementVariable,
// 	averageMagnitude: mean(d.points, v=>v.mag)
// }))

const errorMatrix = computeErrorMatrix(data, data.columns, data.columns.map(()=>"Continuous"))

const t1 = RefineEstimative(data, data.columns, data.columns.map(()=>"Continuous"), errorMatrix);
const t2 = RefineEstimative(data, data.columns, data.columns.map(()=>"Continuous"), errorMatrix,t1);
const t3 = RefineEstimative(data, data.columns, data.columns.map(()=>"Continuous"), errorMatrix,t2);
const t4 = RefineEstimative(data, data.columns, data.columns.map(()=>"Continuous"), errorMatrix,t3);
</script>


<svg width={$canvasWidth} height={$canvasHeight}>

	<Arc x={0} y={0} width={1} height={1} data={[]}></Arc>
</svg>

<style>

</style>