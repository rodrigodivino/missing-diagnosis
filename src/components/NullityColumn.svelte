<script>
    import {scaleLinear} from 'd3-scale';
    import {extent} from 'd3-array';

    export let width;
    export let height;
    export let data;
    export let column;

    $: cellHeight = height / data.length;

    $: colorScale = scaleLinear().domain(extent(data, d => d[column])).range(['white', 'steelblue']);

    function getColor(datum) {
       if(datum[column] === null) {
          return '#71706F'
       }
       return colorScale(datum[column])
    }
</script>

<style>

</style>


{#each data as datum, i}
    <rect y="{i*cellHeight}" height="{cellHeight}" width={width} fill={getColor(datum)}></rect>
{/each}
