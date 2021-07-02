<script>
    import {scaleBand, scaleLinear, select, axisBottom, axisLeft, schemeTableau10, format} from 'd3'
    import {questionOrder} from "../../tests/questionOrder";

    export let data;

    const margin = {left: 50, right: 20, bottom: 50, top: 20}
    const width = 1000;
    const height = 300;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    const maxTime = Math.max(...data.map(d => Math.max(Math.max(...d.nullity.timeCI), Math.max(...d.proposed.timeCI))));
    const maxError = 1;

    const scaleX = scaleBand().domain(questionOrder).range([0, innerWidth]);
    const scaleYTime = scaleLinear().domain([0, maxTime * 1.1]).range([innerHeight, 0]).nice();
    const scaleYError = scaleLinear().domain([0, 1]).range([innerHeight, 0]).nice();

    const segmentWidth = 5;
    const segmentPadding = 8;

    $: timeXAxis = null;
    $: timeYAxis = null;

    $: errorXAxis = null;
    $: errorYAxis = null;


    $: console.log(data);

    $: if (timeXAxis) {
        select(timeXAxis).call(axisBottom(scaleX).tickSizeOuter(0)).selectAll('.tick').each(function (t, i, nodes) {
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

    $: if (errorXAxis) {
        select(errorXAxis).call(axisBottom(scaleX).tickSizeOuter(0)).selectAll('.tick').each(function (t, i, nodes) {
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

    const nullityColor = '#9E9E9E';
    const proposedColor = schemeTableau10[2];
    $: if (timeYAxis) {
        select(timeYAxis).call(axisLeft(scaleYTime).tickSizeOuter(0).tickFormat(t => t + 's'))
    }

    $: if (errorYAxis) {
        select(errorYAxis).call(axisLeft(scaleYError).tickSizeOuter(0).tickFormat(format('.0%')));
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

<p>Direct Question Comparison Data</p>

<p>Time</p>
<svg height={height} width={width}>
    <g transform={`translate(${margin.left},${margin.top})`}>
        <g bind:this={timeXAxis} transform={`translate(0,${innerHeight})`}></g>
        <g bind:this={timeYAxis}></g>
        <line class="wall" x1={innerWidth + 0.5} y1={0} x2={innerWidth + 0.5} y2={innerHeight}></line>
        <line class="wall" x1={0} y1={0.5} x2={innerWidth + 0.5} y2={0.5}></line>


        {#each data as datum}
            <g transform={`translate(${scaleX(datum.question) + scaleX.bandwidth()/2 - segmentPadding},0)`}>
                <line x1="0" y1={scaleYTime(datum.proposed.timeCI[0])} x2="0" y2={scaleYTime(datum.proposed.timeCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYTime(datum.proposed.timeCI[0])} x2={segmentWidth}
                      y2={scaleYTime(datum.proposed.timeCI[0])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYTime(datum.proposed.timeCI[1])} x2={segmentWidth}
                      y2={scaleYTime(datum.proposed.timeCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <circle cy={scaleYTime(datum.proposed.averageTime)} r={segmentWidth} fill={proposedColor}></circle>
            </g>
        {/each}

        {#each data as datum}
            <g transform={`translate(${scaleX(datum.question) + scaleX.bandwidth()/2 + segmentPadding},0)`}>
                <line x1="0" y1={scaleYTime(datum.nullity.timeCI[0])} x2="0" y2={scaleYTime(datum.nullity.timeCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYTime(datum.nullity.timeCI[0])} x2={segmentWidth}
                      y2={scaleYTime(datum.nullity.timeCI[0])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYTime(datum.nullity.timeCI[1])} x2={segmentWidth}
                      y2={scaleYTime(datum.nullity.timeCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <circle cy={scaleYTime(datum.nullity.averageTime)} r={segmentWidth} fill={nullityColor}></circle>
            </g>
        {/each}
    </g>
</svg>

<p>Error</p>
<svg height={height} width={width}>
    <g transform={`translate(${margin.left},${margin.top})`}>
        <g bind:this={errorXAxis} transform={`translate(0,${innerHeight})`}></g>
        <g bind:this={errorYAxis}></g>
        <line class="wall" x1={innerWidth + 0.5} y1={0} x2={innerWidth + 0.5} y2={innerHeight}></line>
        <line class="wall" x1={0} y1={0.5} x2={innerWidth + 0.5} y2={0.5}></line>


        {#each data as datum}
            <g transform={`translate(${scaleX(datum.question) + scaleX.bandwidth()/2 - segmentPadding},0)`}>
                <line x1="0" y1={scaleYError(datum.proposed.errorCI[0])} x2="0" y2={scaleYError(datum.proposed.errorCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYError(datum.proposed.errorCI[0])} x2={segmentWidth}
                      y2={scaleYError(datum.proposed.errorCI[0])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYError(datum.proposed.errorCI[1])} x2={segmentWidth}
                      y2={scaleYError(datum.proposed.errorCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <text font-size="18px" font-weight="bolder" alignment-baseline="middle" text-anchor="middle" y={scaleYError(datum.proposed.errorRate)}
                      fill={proposedColor}>x</text>
            </g>
        {/each}

        {#each data as datum}
            <g transform={`translate(${scaleX(datum.question) + scaleX.bandwidth()/2 + segmentPadding},0)`}>
                <line x1="0" y1={scaleYError(datum.nullity.errorCI[0])} x2="0" y2={scaleYError(datum.nullity.errorCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYError(datum.nullity.errorCI[0])} x2={segmentWidth}
                      y2={scaleYError(datum.nullity.errorCI[0])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line x1={-segmentWidth} y1={scaleYError(datum.nullity.errorCI[1])} x2={segmentWidth}
                      y2={scaleYError(datum.nullity.errorCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <text font-size="18px" font-weight="bolder" alignment-baseline="middle" text-anchor="middle" y={scaleYError(datum.nullity.errorRate)}
                      fill={nullityColor}>x</text>
            </g>
        {/each}
    </g>
</svg>


