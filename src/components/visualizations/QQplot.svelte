<script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {select} from "d3-selection";
    import {scaleLinear} from "d3-scale"
    import {axisLeft, axisBottom} from "d3-axis";
    import {line} from "d3-shape";
    
    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let data;

    const margin = {top: 50, bottom: 50, left: 50, right: 50};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

    $: xScale = scaleLinear().domain([0, 1]).range([0, innerWidth])
    $: yScale = scaleLinear().domain([0, 1]).range([innerHeight, 0])

    $: lineGenerator = line().x(d=>xScale(d.x)).y(d=> yScale(d.y))


    let xAxisDOM, yAxisDOM;

    $: xAxis = axisBottom(xScale)
    $: yAxis = axisLeft(yScale)

    const renderAxes = (xAxis, xAxisDOM, yAxis, yAxisDOM) => {
        if(xAxisDOM && yAxisDOM){
            const xg = select(xAxisDOM)
            xg.selectAll().remove()
            xg.call(xAxis)
            
            const yg = select(yAxisDOM)
            yg.selectAll().remove()
            yg.call(yAxis)
        }
    }; $: renderAxes(xAxis, xAxisDOM, yAxis, yAxisDOM)

</script>


<g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect width={width * $canvasWidth} height={height * $canvasHeight} fill='none' stroke='dimgray'></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
            <g class="x-axis" transform="translate(0,{innerHeight})" bind:this={xAxisDOM}></g>
            <g class="x-legend" transform="translate({innerWidth/2}, {innerHeight + 20})">
                <text class="x-label">Quantiles from the Missing Sample</text>
            </g> 
            <g class="y-axis" bind:this={yAxisDOM}></g>
            
            <line class="diagonal" x1={xScale(0)} y1={yScale(0)} x2={xScale(1)} y2={yScale(1)}></line>
        
        </g>
        <g class="foreground">
            <g class="lines">
                {#each data as d}
                    <path class="data" d={lineGenerator(d.points)}></path>
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
    text.x-label {
        alignment-baseline: hanging;
        text-anchor: middle;
    }
</style>

