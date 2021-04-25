<script>
  import Dashboard from "../components/Dashboard.svelte";
  import { canvasWidth, canvasHeight } from "../stores";
  import { csvParse, autoType } from "d3-dsv";
  import { Levels } from "../utils/compute-probabilities";

  let files;
  $: loadedFile = files && files[0];
  let text;
  let click;

  let ok = false;

  const parseFile = async (file, encoding) => {
    const text = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = fileLoadedEvent => {
        const text = fileLoadedEvent.target.result;
        resolve(text);
      };
      reader.readAsText(file, "UTF-8");
    });

    const regex = new RegExp(`${encoding === "?" ? "\\?" : encoding}`, "gi");
    const replacedText = encoding === ",," ? text : text.replace(regex, "");
    const data = await csvParse(replacedText, autoType);

    data.types = data.columns.map(c => {
      const column = data.map(e => e[c]);
      const levelDepth = Levels(column).length;

      if (levelDepth < 30) {
        if (column.some(v => typeof v === "number")) {
          return "Ordinal";
        } else {
          return "Categorical";
        }
      } else {
        if (column.some(v => typeof v === "number")) {
          return "Quantitative";
        } else {
          return "Nominal";
        }
      }
    });

    data.validColumns = data.columns.filter((c, i) => {
      return data.types[i] !== "Nominal";
    });

    data.columnsWithMissingValues = data.columns.filter(c => {
      return data.map(e => e[c]).some(v => v === null);
    });

    return data;
  };

  const handleStart = () => {
    if (text && loadedFile) {
      ok = true;
    } else if (text) {
      alert("Please specify data");
    } else if (loadedFile) {
      alert("Please specify missing encoding");
    } else {
      alert("Please specify data and missing encoding");
    }
  };
</script>

<style>

</style>

<svelte:head>
  <title>Missing values diagnosis</title>
</svelte:head>

{#if ok}
  {#await parseFile(loadedFile, text)}
    <p>...parsing data</p>
  {:then data}
    <Dashboard {data} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:else}
  <form>

    <div>
      <label for="example">Upload Data</label>
      <input type="file" bind:files />
    </div>

    <div>
      <label for="example">Missing Encoding</label>
      <input
        type="text"
        bind:value={text}
        placeholder="ex.: | ,, | null | miss | ?" />
    </div>

    <div>
      <button type="button" on:click={handleStart}>Start</button>
    </div>

  </form>

{/if}
