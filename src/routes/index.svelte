<script>
	import QQplot from '../components/visualizations/QQplot.svelte';
	import {canvasWidth, canvasHeight} from "../stores";
	import {csvParse, autoType} from 'd3';

	let files;
	$: loadedFile = files && files[0];

	// This parse function is on protyping mode, hardcoding missing values as -999 noises
	const parseFile = async file => {
		const text = await file.text()
		const data = await csvParse(text, autoType)
		for (let entry of data){
			// Here the noises are recoded as null
			for (let column of data.columns){
				if (entry[column] < -500)
					entry[column] = null
			}
		}
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
		<QQplot x={0} y={0} width={1} height={1} {data}></QQplot>
	</svg>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}


{:else}
	<input type="file" bind:files>
{/if}






<style>
	
</style>