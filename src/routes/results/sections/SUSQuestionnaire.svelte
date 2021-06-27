<script>
    import {scaleBand, scaleLinear, select, axisBottom, axisLeft, schemeTableau10, format} from 'd3'
    import {questionOrder} from "../../tests/questionOrder";
    import {susOrder} from "../../tests/susOrder";

    export let data;

    const margin = {left: 50, right: 20, bottom: 50, top: 20}
    const width = 1000;
    const height = 300;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const scaleX = scaleBand().domain(susOrder).range([0, innerWidth]);
    const scaleY = scaleLinear().domain([0, 1]).range([innerHeight, 0]);

    const segmentWidth = 5;
    const segmentPadding = 8;

    $: xAxis = null;
    $: yAxis = null;

    $: if (xAxis) {
        select(xAxis).call(axisBottom(scaleX).tickSizeOuter(0)).selectAll('.tick').each(function (t, i, nodes) {
            const line = select(this)
                .selectAll('line')

            if(i=== nodes.length - 1) {
                return line.remove()
            }

            line
                .attr('transform', `translate(${scaleX.bandwidth() / 2},0)`)
                .attr('shape-rendering', 'crispEdges')
                .clone()
                .attr('y2', -innerHeight)
                .attr('stroke-width', 0.5)
                .attr('stroke', '#BEBEBE')
                .attr('stroke-dasharray', '2 1')
                .attr('shape-rendering', 'crispEdges')
        })
    }

    $: if (yAxis) {
        select(yAxis).call(axisLeft(scaleY).tickSizeOuter(0).tickFormat(format('.0%')));
    }
</script>

<style>
    svg {
        margin: 20px;
    }

    rect {
        opacity: 0.1;
    }

    line.wall {
        stroke: #BEBEBE;
        stroke-width: 1px;
        stroke-dasharray: 2 1;
    }
</style>

<svg height={height} width={width}>
    <g transform={`translate(${margin.left},${margin.top})`}>
        <g bind:this={xAxis} transform={`translate(0,${innerHeight})`}></g>
        <g bind:this={yAxis}></g>
        <line class="wall" x1={innerWidth + 0.5} y1={0} x2={innerWidth + 0.5} y2={innerHeight}></line>
        <line class="wall" x1={0} y1={0.5} x2={innerWidth + 0.5} y2={0.5}></line>


<!--        {#each data as datum}-->
<!--            <g transform={`translate(${scaleX(datum.question) + scaleX.bandwidth()/2 - segmentPadding},0)`}>-->
<!--                <line x1="0" y1={scaleYTime(datum.proposed.timeCI[0])} x2="0" y2={scaleYTime(datum.proposed.timeCI[1])}-->
<!--                      stroke={proposedColor} stroke-width="1"></line>-->
<!--                <line x1={-segmentWidth} y1={scaleYTime(datum.proposed.timeCI[0])} x2={segmentWidth}-->
<!--                      y2={scaleYTime(datum.proposed.timeCI[0])}-->
<!--                      stroke={proposedColor} stroke-width="1"></line>-->
<!--                <line x1={-segmentWidth} y1={scaleYTime(datum.proposed.timeCI[1])} x2={segmentWidth}-->
<!--                      y2={scaleYTime(datum.proposed.timeCI[1])}-->
<!--                      stroke={proposedColor} stroke-width="1"></line>-->
<!--                <circle cy={scaleYTime(datum.proposed.averageTime)} r={segmentWidth} fill={proposedColor}></circle>-->
<!--            </g>-->
<!--        {/each}-->

<!--        {#each data as datum}-->
<!--            <g transform={`translate(${scaleX(datum.question) + scaleX.bandwidth()/2 + segmentPadding},0)`}>-->
<!--                <line x1="0" y1={scaleYTime(datum.nullity.timeCI[0])} x2="0" y2={scaleYTime(datum.nullity.timeCI[1])}-->
<!--                      stroke={nullityColor} stroke-width="1"></line>-->
<!--                <line x1={-segmentWidth} y1={scaleYTime(datum.nullity.timeCI[0])} x2={segmentWidth}-->
<!--                      y2={scaleYTime(datum.nullity.timeCI[0])}-->
<!--                      stroke={nullityColor} stroke-width="1"></line>-->
<!--                <line x1={-segmentWidth} y1={scaleYTime(datum.nullity.timeCI[1])} x2={segmentWidth}-->
<!--                      y2={scaleYTime(datum.nullity.timeCI[1])}-->
<!--                      stroke={nullityColor} stroke-width="1"></line>-->
<!--                <circle cy={scaleYTime(datum.nullity.averageTime)} r={segmentWidth} fill={nullityColor}></circle>-->
<!--            </g>-->
<!--        {/each}-->
    </g>
</svg>
