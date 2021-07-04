<script>
    import {scaleBand, scaleLinear} from "d3-scale";
    import {sum, max} from "d3-array";
    import {axisBottom, axisLeft} from "d3-axis";
    import {select} from "d3-selection";

    export let width;
    export let height;
    export let totalBins;
    export let expectedBins;
    export let sampleBins;
    export let nOfMissingSamples;
    export let fill;
    export let samplingVariable, i;
    export let measurementVariable, j;
    export let focus;
    export let continuous;
    export let lang;

    const margin = {top: 35, left: 35, right: 35, bottom: 50};
    $: sampleSize = sum(sampleBins.map(b => b.count));
    $: innerWidth = width - margin.left - margin.right;
    $: innerHeight = height - margin.top - margin.bottom;

    $:filteredBins = totalBins.filter(b => b.count > 0);

    $: xScale = scaleBand()
        .domain(filteredBins.map(b => b.name))
        .range([0, innerWidth]);

    $: yScale = scaleLinear()
        .domain([0, max(sampleBins, (b, i) => Math.max(b.count, expectedBins[i].count)) * 1.1])
        .range([innerHeight, 0]);

    $: xAxis = axisBottom(xScale);
    $: yAxis = axisLeft(yScale).ticks(4);

    $: barWidth = xScale.bandwidth();
    const barPadding = 2;

    let xAxisDOM, yAxisDOM;
    const placeLegends = (xAxisDOM, yAxisDOM, xAxis, yAxis) => {
        if (xAxisDOM && yAxisDOM && xScale && yScale) {
            const xg = select(xAxisDOM);
            const yg = select(yAxisDOM);
            xg.selectAll().remove();
            yg.selectAll().remove();
            xg.call(xAxis)
                .selectAll("text")
                .attr("font-size", 12)
                .style('shape-rendering', 'crispEdges')
                .attr("y", 15) // 15 is for print Mode
                .each(function (t, i) {
                    if (isNaN(t)) {
                        const tmiss = t === 'miss';
                        select(this)
                            .attr("y", 0) //+5 is for print Mode
                            .attr("x", 5)
                            .attr("transform", "translate(0,2)rotate(55)")
                            .attr("text-anchor", "start")
                            .text((tmiss)?(lang==='pt'?'não há':'miss'):t);
                    }
                    else if (continuous) {
                        select(this)
                            .attr("y", 2) //+5 is for print Mode
                            .attr("x", 5)
                            .attr("transform", "rotate(55)")
                            .attr("text-anchor", "start")
                            .text( '≤' + filteredBins[i].maxNum.toFixed(1));
                    }
                });
            yg.call(yAxis)
                .selectAll("text")
                .attr("font-size", 9)
                .attr("y", 0); // +4 is for print Mode
        }
    };
    $: placeLegends(xAxisDOM, yAxisDOM, xAxis, yAxis);
</script>

<style>
    text.title {
        text-anchor: middle;
        font-size: 16px;
    }

    rect.focus {
        animation: blinker 1s linear infinite;
    }

    @keyframes blinker {
        50% {
            fill: black;
        }
    }
</style>

<g>
    <rect class:focus {fill} {height} {i} {j} {width}></rect>
    <rect
            fill={'white'}
            height={height - 10}
            pointer-events="none"
            width={width - 10}
            x={5}
            y={5}></rect>
    <g
            class="margin-convention"
            pointer-events="none"
            transform="translate({margin.left}, {margin.top})">
        <rect fill="white" {innerHeight} {innerWidth}></rect>
        <g class="background">
            <rect fill="white" height={innerHeight} width={innerWidth}></rect>
            <g
                    bind:this={xAxisDOM}
                    class="x-axis"
                    transform="translate(0,{innerHeight})"></g>
            <g bind:this={yAxisDOM} class="y-axis"></g>
            <text
                    dominant-baseline="middle"
                    class="title"
                    font-size="16px"
                    x={innerWidth / 2}
                    y={-margin.top / 2 + 2}>
                <tspan dominant-baseline="middle" font-weight="bold">
                    {measurementVariable}
                </tspan>
                {lang==='pt' ? 'quando não há ':'when missing '}
                <tspan dominant-baseline="middle" font-weight="bold">
                    {samplingVariable}
                </tspan>
                <tspan dominant-baseline="middle">({nOfMissingSamples})</tspan>
            </text>
        </g>
        <g class="foreground">
            {#each totalBins as bin, i}
                {#if bin.count > 0}
                    <rect
                            class="sample"
                            x={xScale(bin.name) + barPadding / 2}
                            y={yScale(sampleBins[i].count)}
                            height={Math.abs(yScale(sampleBins[i].count) - yScale(0))}
                            fill='lightgray'
                            width={barWidth - barPadding}></rect>
                    <rect
                            class="sample"
                            x={xScale(bin.name) + barPadding / 2}
                            y={yScale(Math.max(expectedBins[i].count, sampleBins[i].count))}
                            height={Math.abs(yScale(expectedBins[i].count) - yScale(sampleBins[i].count))}
                            fill={(sampleBins[i].count > expectedBins[i].count) ? 'mediumseagreen' : 'tomato' }
                            width={barWidth - barPadding}></rect>
                {/if}
            {/each}
        </g>
    </g>
</g>
