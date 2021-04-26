<script>
    import {canvasHeight, canvasWidth} from "../stores";
    import {scaleBand} from 'd3-scale';
    import NullityColumn from "./NullityColumn.svelte";

    export let data;

    $: console.log(data);

    const margin = {top: 100, left: 10, right: 10, bottom: 10}
    $: innerWidth = $canvasWidth - margin.left - margin.right;
    $: innerHeight = $canvasHeight - margin.top - margin.bottom;

    $: xScale = scaleBand().domain(data.columns).range([0, innerWidth])
    $: rectHeight = innerHeight / data.length;

    $: console.log(rectHeight)
</script>

<style>

</style>

<svg height={$canvasHeight} width={$canvasWidth}>
    <g transform='translate({margin.left},{margin.top})'>
        {#each xScale.domain() as label}
            <text transform="translate({xScale(label) + xScale.bandwidth() / 2}, -5)rotate(-45)"> {label} </text>
            <g transform="translate({xScale(label)},0)">
                <NullityColumn data={data} width={xScale.bandwidth()} height={innerHeight}/>
            </g>
        {/each}
        <!--        <rect height={innerHeight} width={innerWidth}></rect>-->
    </g>

</svg>
