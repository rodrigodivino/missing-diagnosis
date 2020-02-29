<script>
	import Dashboard from '../components/Dashboard.svelte'
	import {canvasWidth, canvasHeight} from "../stores";
	import {csvParse, autoType} from 'd3-dsv';

	let files;
	$: loadedFile = files && files[0];

	// This parse function is on protyping mode, hardcoding missing values as -999 noises
	const parseFile = async file => {
		
		const text = await new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onerror = reject;
			reader.onload = fileLoadedEvent => {
				const text = fileLoadedEvent.target.result;
				resolve(text)
			}
			reader.readAsText(file	, "UTF-8");
		})

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
	<Dashboard {data}></Dashboard>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}


{:else}
	<input type="file" bind:files>
{/if}






<style>
	
</style>