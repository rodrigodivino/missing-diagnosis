<script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {select} from "d3-selection";
    import {scaleLinear, scaleBand} from "d3-scale"
    import {axisLeft, axisBottom} from "d3-axis";
    import {line} from "d3-shape";
    import {path} from "d3-path";
    import {onMount, afterUpdate, tick} from 'svelte';
    
    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let data;
    export let columns;
    export let refine;

    const margin = {top: 50, bottom: 50, left: 50, right: 50};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

    $: xScale = scaleBand().domain(columns).range([0, innerWidth]);
    $: yScale = scaleLinear().domain([0, 200]).range([0, innerHeight]);

    $: xAxis = axisBottom(xScale);
    $: yAxis = axisLeft(yScale);

    $: refineLevel = data[1][1];
    $: console.log(data);

    let xAxisDOM, yAxisDOM;
    const placeAxes = (xAxisDOM, yAxisDOM, xAxis, yAxis) => {
        if(xAxisDOM && yAxisDOM && xScale && yScale){
            const xg = select(xAxisDOM);
            const yg = select(yAxisDOM);
            xg.selectAll().remove();
            yg.selectAll().remove();
            xg.call(xAxis);
            yg.call(yAxis);
            yg.selectAll('g.tick').select('text').text(t=> {
                const n = parseInt(t);
                return n > 100 ? (200 - n) : (n);
            });
        }
    }; $: placeAxes(xAxisDOM, yAxisDOM, xAxis, yAxis);

    const drawEdge = (source, target, value) => {
        const orientation = Math.sign(xScale(target) - xScale(source));
        const percentValue = 100 * value;
        const correctedValue = orientation > 0 ? percentValue : (200 - percentValue);
        const band = xScale.bandwidth()/2;
        const p = path();
        p.moveTo(band+xScale(source), yScale(100))
        p.quadraticCurveTo(
            band+xScale(source), yScale(correctedValue),
            band+xScale(source) + (xScale(target)-xScale(source))/2, yScale(correctedValue)
        )
        p.quadraticCurveTo(
            band+xScale(target), yScale(correctedValue),
            band+xScale(target), yScale(100)
        )
        return p.toString()
    }

   afterUpdate(async() => {
       
       console.log('current level: ', data[1][1])
       const nextData = await refine(data);
       await tick();
       if (nextData[1][1] < 1000)
            data = nextData;
   })
    

</script>


<g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect width={width * $canvasWidth} height={height * $canvasHeight} fill='none' stroke='dimgray'></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
           <g class='x-axis' bind:this={xAxisDOM} transform='translate(0,{innerHeight/2})'></g>
           <g class='y-axis' bind:this={yAxisDOM}></g>
        </g>
        <g class="foreground">
           {#each data as vector, i}
            {#each vector as value, j}
                {#if (i!==j) && (value !== null)}
                    <path class="data"
                    d={drawEdge(columns[i], columns[j], value)}></path>
                {/if}
            {/each}
           {/each}
        </g>
    </g>
</g>


<style>
    path.data {
        fill: none;
        stroke: steelblue;
        stroke-width: 1px;
    }
</style>

