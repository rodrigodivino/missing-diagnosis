<script>
	import QQplot from '../components/visualizations/QQplot.svelte';
	import {canvasWidth, canvasHeight} from "../stores";
	import {csvParse} from 'd3';

	let files;
	$: loadedFile = files && files[0];

	const parseFile = async file => {
		const text = await file.text()
		const data = await csvParse(text)
		return data
	}
</script>

<svelte:head>
	<title>Missing values diagnosis</title>
</svelte:head>


{#if loadedFile}
	{#await parseFile(loadedFile)}
		<p>...parsing data</p>
	{:then data}
	<svg width={$canvasWidth} height={$canvasHeight}>
		<QQplot x={0} y={0} width={1} height={1}></QQplot>
	</svg>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}


{:else}
	<input type="file" bind:files>
{/if}






<style>
	
</style>