<script>
import QQplot from './visualizations/QQplot.svelte';
import {getQQPoints} from '../utils/data-processing'
import {canvasWidth, canvasHeight} from "../stores";

export let data;

$: QQpoints = getQQPoints(data);

$: console.log(QQpoints);
</script>


<svg width={$canvasWidth} height={$canvasHeight}>
	<QQplot x={0} y={0} width={1} height={1} data={QQpoints}></QQplot>
</svg>

<style>

</style>