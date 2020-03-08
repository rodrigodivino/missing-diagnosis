 <script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {select} from "d3-selection";
    import {scaleLinear, scaleBand} from "d3-scale"
    import {axisLeft, axisBottom} from "d3-axis";
    import {line} from "d3-shape";
    import {path} from "d3-path";
    import {interpolateInferno} from "d3-scale-chromatic";
    import {afterUpdate, tick} from 'svelte';

    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let colordata;
    export let glyphdata;
    export let columns;
    export let refine;

    const margin = {top: 50, bottom: 50, left: 50, right: 50};
    const cellMargin = {top:1, left:1, right:1, bottom:1}
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

    $: xScale = scaleBand().domain(columns).range([0, innerWidth])
    $: yScale = scaleBand().domain(columns).range([innerHeight, 0])
    $: cellWidth = xScale.bandwidth() - cellMargin.left - cellMargin.right;
    $: cellHeight = yScale.bandwidth() - cellMargin.top - cellMargin.bottom;
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

    afterUpdate(async() => {
        console.log('current level: ', colordata[1][1])
        const nextColordata = await refine(colordata, 100);
        await tick();

        setTimeout(()=>{
            if (nextColordata[1][1] < 1000)
                colordata = nextColordata;
        }, 1)
   })
 </script>

 <g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect width={width * $canvasWidth} height={height * $canvasHeight} fill='none' stroke='dimgray'></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
           <g class='x-axis' bind:this={xAxisDOM} transform='translate(0,{innerHeight})'></g>
           <g class='y-axis' bind:this={yAxisDOM}></g>
        </g>
        <g class="foreground">
        {console.log(cellWidth, cellHeight)}
            {#each columns as iName, i}
                {#each columns as jName, j}
                    {#if i!==j && colordata[i][j] !== null}
                    <g transform="translate({cellMargin.left + xScale(jName)},{cellMargin.top + yScale(iName)})">
                        <rect width={cellWidth} height={cellHeight}
                        fill={interpolateInferno(colordata[i][j])}></rect>
                        
                    </g>
                    {/if}
                {/each}
            {/each}
        </g>
    </g>
</g>

 <style></style>
 
