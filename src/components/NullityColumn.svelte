<script>
    import {scaleLinear, scaleOrdinal} from 'd3-scale';
    import {extent} from 'd3-array';
    import {schemeSet1, schemeSet2, schemeSet3} from 'd3-scale-chromatic';

    export let width;
    export let height;
    export let data;
    export let column;
    export let categorical;

    $: cellHeight = height / data.length;

    $: colorScale = categorical ? scaleOrdinal().domain([...new Set(data.map(d => d[column]))]).range([...schemeSet3, ...schemeSet2, ...schemeSet1]) : scaleLinear().domain(extent(data, d => d[column])).range(['white', 'steelblue']);

    function getColor(datum) {
        if (datum[column] === null) {
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
