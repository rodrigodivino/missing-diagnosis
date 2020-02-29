<script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {scaleLinear, axisBottom, select, forceSimulation, forceX, forceY, forceCollide} from 'd3';

    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let data;

    const margin = {top:20, left:20, right:20, bottom: 20};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;
    
    $: xScale = scaleLinear().domain([0,1]).range([0,innerWidth])
    $: xAxis = axisBottom(xScale);

    let xAxisGroup;
    const placeAxis = (xAxis, xAxisGroup) => {
        if (xAxisGroup){
            const xg = select(xAxisGroup)
            xg.selectAll().remove()
            xg.call(xAxis)
        }
    }; $: placeAxis(xAxis, xAxisGroup);

    

    const computeLayout = async data => {
        const simulation = forceSimulation(data)
            .force("x", forceX(d=>xScale(d.averageMagnitude)).strength(5))
            .force("y", forceY(innerHeight/2))
            .force("collide", forceCollide(5))
            .stop()

        for (let i = 0; i < 120; ++i) simulation.tick();

        return data
    }

    $: layoutPromise = computeLayout(data);

    
</script>

<g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect class="outerBackground" width={width * $canvasWidth} height={height * $canvasHeight}></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
        </g>
        <g class="foreground">
           {#await layoutPromise}
                {console.log('computing layout')}
           {:then data}
                {#each data as d}
                    <circle class='data' cx={d.x} cy={d.y}></circle>
                {/each}
           {:catch error}
                {console.log('error computing layout')}
           {/await}
        </g>
        <g class="axes">
            <g class="x-axis" bind:this={xAxisGroup} transform="translate(0,{innerHeight/2})"></g>
        </g>
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

</style>
