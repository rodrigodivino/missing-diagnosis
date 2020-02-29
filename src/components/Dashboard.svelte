<script>
import QQplot from './visualizations/QQplot.svelte';
import Beeswarm from './visualizations/Beeswarm.svelte';
import {getQQPoints} from '../utils/data-processing'
import {canvasWidth, canvasHeight} from "../stores";
import {mean} from "d3"

export let data;

$: QQpoints = getQQPoints(data);

$: BeeswarmData = QQpoints.map(d=> ({
	treatmentVariable: d.treatmentVariable,
	measurementVariable: d.measurementVariable,
	averageMagnitude: mean(d.points, v=>v.mag)
}))


$: console.log(BeeswarmData);
</script>


<svg width={$canvasWidth} height={$canvasHeight}>
	<Beeswarm x={0} y={0} width={1} height={.2} data={BeeswarmData}></Beeswarm>
	<QQplot x={0} y={.2} width={1} height={.8} data={QQpoints}></QQplot>
</svg>

<style>

</style>