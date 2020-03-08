 <script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {select} from "d3-selection";
    import {scaleLinear, scaleBand} from "d3-scale"
    import {axisLeft, axisBottom} from "d3-axis";
    import {line} from "d3-shape";
    import {path} from "d3-path";
    import {afterUpdate} from 'svelte';

    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let colordata;
    export let glyphdata;
    export let columns;
    export let refine;

    const margin = {top: 50, bottom: 50, left: 50, right: 50};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

    $: xScale = scaleBand().domain(columns).range([0, innerWidth]);
    $: yScale = scaleBand().domain(columns).range([innerHeight, 0]);

    $: xAxis = axisBottom(xScale)
    $: yAxis = axisLeft(yScale)

    let xAxisDOM, yAxisDOM;
    const placeAxes = (xAxisDOM, yAxisDOM, xAxis, yAxis) => {
        if(xAxisDOM && yAxisDOM && xScale && yScale){
            const xg = select(xAxisDOM);
            const yg = select(yAxisDOM);
            xg.selectAll().remove();
            yg.selectAll().remove();
            xg.call(xAxis);
            yg.call(yAxis);
        }
    }; $: placeAxes(xAxisDOM, yAxisDOM, xAxis, yAxis);
 </script>

 <g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect width={width * $canvasWidth} height={height * $canvasHeight} fill='none' stroke='dimgray'></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
           <g class='x-axis' bind:this={xAxisDOM} transform='translate(0,{innerHeight})'></g>
           <g class='y-axis' bind:this={yAxisDOM}></g>
        </g>
        <g class="foreground">
        </g>
    </g>
</g>

 <style></style>
 
