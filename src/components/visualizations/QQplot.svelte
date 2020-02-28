<script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {getLineObjects} from "./QQplot.functions.js";
    import {select} from "d3";
    import {scaleLinear, axisLeft, axisBottom} from "d3";
    import {line} from "d3";
    import {onMount} from 'svelte';
    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let data;

    const margin = {top: 50, bottom: 50, left: 50, right: 50};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

    $: dataObjects = getLineObjects(data)

    $: xScale = scaleLinear().domain([0, 1]).range([0, innerWidth])
    $: yScale = scaleLinear().domain([0, 1]).range([innerHeight, 0])

    $: lineGenerator = line().x(d=>xScale(d.x)).y(d=> yScale(d.y))


    let xAxisGroup, yAxisGroup;

    $: xAxis = axisBottom(xScale)
    $: yAxis = axisLeft(yScale)

    const placeAxes = (xAxis, xAxisGroup, yAxis, yAxisGroup) => {
        if(xAxisGroup && yAxisGroup){
            select(xAxisGroup).selectAll().remove()
            select(xAxisGroup).call(xAxis)
            select(yAxisGroup).selectAll().remove()
            select(yAxisGroup).call(yAxis)
        }
    }; $: placeAxes(xAxis, xAxisGroup, yAxis, yAxisGroup)


</script>



<g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect width={width * $canvasWidth} height={height * $canvasHeight} fill='none' stroke='dimgray'></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
            <g class="x-axis" transform="translate(0,{innerHeight})" bind:this={xAxisGroup}></g>
            <g class="y-axis" bind:this={yAxisGroup}></g>
            <line class="diagonal" x1={xScale(0)} y1={yScale(0)} x2={xScale(1)} y2={yScale(1)}></line>
        
        </g>
        <g class="foreground">
            <g class="lines">
                {#each dataObjects as d}
                    {console.log(d)}
                    <path class="data" d={lineGenerator(d.lineObject)}></path>
	            {/each}
            </g>
        </g>
    </g>
</g>


<style>
    path.data {
        stroke: steelblue;
        stroke-width: 2;
        fill: none;
    }
    line.diagonal {
        stroke: black;
        stroke-width: 5;
    }
</style>

