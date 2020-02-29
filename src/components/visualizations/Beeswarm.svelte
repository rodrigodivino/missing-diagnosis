<script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {event, select} from "d3-selection"
    import {scaleLinear} from "d3-scale"
    import {axisBottom} from "d3-axis"
    import {forceSimulation, forceX, forceY, forceCollide} from "d3-force"
    import {brushX} from 'd3-brush';

    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let data;

    const margin = {top:20, left:50, right:50, bottom: 20};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;
    
    $: xScale = scaleLinear().domain([0,1]).range([0,innerWidth])
    $: xAxis = axisBottom(xScale);

    let xAxisDOM;
    const placeAxis = (xAxis, xAxisDOM) => {
        if (xAxisDOM){
            const xg = select(xAxisDOM)
            xg.selectAll().remove()
            xg.call(xAxis)
        }
    }; $: placeAxis(xAxis, xAxisDOM);

    
    const computeLayout = async data => {
        const simulation = forceSimulation(data)
            .force("x", forceX(d=>xScale(d.averageMagnitude)).strength(5))
            .force("y", forceY(innerHeight/2))
            .force("collide", forceCollide(5))
            .stop()

        for (let i = 0; i < 120; ++i) simulation.tick();

        return data
    }; $: layoutPromise = computeLayout(data);


    
    let selectedInterval = null;
    $: brush = brushX()
        .extent([[0,0], [innerWidth, innerHeight]])
        .on("start brush end", () => {
            selectedInterval =
            event.selection
            ? event.selection.map(px=> xScale.invert(px))
            : null
        })


    let brushDOM;
    const placeBrush = (brushDOM, brush) => {
        if(brushDOM && brush){
            select(brushDOM).call(brush)
        }
    }; $: placeBrush(brushDOM, brush);


    // TODO: bind the datapoints to the selected interval

</script>

<g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect class="outerBackground" width={width * $canvasWidth} height={height * $canvasHeight}></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
            
        </g>
        <g class="foreground">
           {#await layoutPromise}
                <rect class="loading" width={innerWidth} height={innerHeight}></rect>
           {:then data}
                {#each data as d}
                    <circle class='data' cx={d.x} cy={d.y}></circle>
                {/each}
           {:catch error}
                {console.log('error computing layout')}
           {/await}
        </g>
        <g class="axes">
            <g class="x-axis" bind:this={xAxisDOM} transform="translate(0,{innerHeight/2})"></g>
        </g>
        <g class="brush" bind:this={brushDOM}></g>
    </g>
</g>

<style>
 
    rect.outerBackground {
        fill: none;
        stroke: dimgray;
    }

    circle.data {
        r: 4;
        fill: steelblue;
    }

    g.brush {
        opacity: .7;
    }
</style>
