<script>
    import {scaleLinear, scaleBand} from 'd3-scale';
    import {max, range} from 'd3-array';
    import {axisLeft, axisBottom} from 'd3-axis';
    import {select} from 'd3-selection';

    export let width;
    export let height;
    export let totalBins;
    export let expectedBins;
    export let sampleBins;
    
    const margin = {top:35, left:35, right:35, bottom: 35}
    $: innerWidth = width - margin.left - margin.right;
    $: innerHeight = height - margin.top - margin.bottom;

    $: xScale = scaleBand().domain(range(totalBins.length)).range([0, innerWidth]);
    $: yScale = scaleLinear().domain([0, max(totalBins, b=>b.count)]).range([innerHeight, 0]);

    
    $: xAxis = axisBottom(xScale);
    $: yAxis = axisLeft(yScale).ticks(6);

    $: barWidth = xScale.bandwidth();
    const barPadding = 2;

    let xAxisDOM, yAxisDOM;
    const placeLegends = (xAxisDOM, yAxisDOM, xAxis, yAxis,) => {
        if(xAxisDOM && yAxisDOM && xScale && yScale){
            const xg = select(xAxisDOM);
            const yg = select(yAxisDOM);
            xg.selectAll().remove();
            yg.selectAll().remove();
            xg.call(xAxis);
            yg.call(yAxis);
        }
    }; $: placeLegends(xAxisDOM, yAxisDOM, xAxis, yAxis);

</script>

<g>
    <rect class="frame" {width} {height}></rect>
    <g class="margin-convention" transform='translate({margin.left}, {margin.top})'>
    <g class='background'>
        <rect width={innerWidth} height={innerHeight} fill='white'></rect>
        <g class='x-axis' transform='translate(0,{innerHeight})' bind:this={xAxisDOM}></g>
        <g class='y-axis' bind:this={yAxisDOM}></g>
    </g>
    <g class='foreground'>
        {#each totalBins as bin, i}
            <rect class="total" 
            x={xScale(i)+barPadding/2} 
            y={yScale(bin.count)} 
            height={innerHeight - yScale(bin.count)} 
            width={barWidth-barPadding}>
            </rect>
            <rect class="expected" 
            x={xScale(i)+barPadding/2} 
            y={yScale(expectedBins[i].count) - .5} 
            height={1} 
            width={barWidth-barPadding}>
            </rect>
            <rect class="sample" 
            x={xScale(i)+barPadding/2} 
            y={Math.min(yScale(sampleBins[i].count),yScale(expectedBins[i].count))} 
            height={Math.abs(yScale(sampleBins[i].count) - yScale(expectedBins[i].count))} 
            fill={(yScale(sampleBins[i].count) - yScale(expectedBins[i].count) > 0? 'firebrick':'steelblue')}
            width={barWidth-barPadding}>
            </rect>
        {/each}
    </g> 
    </g>
</g>

<style>
    rect.frame {
        fill: white;
        stroke: black;
        stroke-width: 2px;
    } 

    rect.total {
        fill: gainsboro;
        stroke: none;
        stroke-width: .5px;
    }

    rect.expected {
        fill: black;
    }
</style>