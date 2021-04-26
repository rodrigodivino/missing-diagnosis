<script>
    export let width;
    export let height;
    export let data;

    $: cellHeight = height / data.length;
</script>

<style>

</style>


{#each data as datum, i}
   <rect y="{i*cellHeight}" height="{cellHeight}" width={width}></rect>
{/each}
