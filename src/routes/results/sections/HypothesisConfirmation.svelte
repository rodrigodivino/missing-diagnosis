<script>
    import {axisBottom, scaleBand, select, scaleLinear, axisLeft, format, schemeTableau10} from "d3";
    import {questionOrder} from "../../tests/questionOrder";
    import {hypotheses} from "../../tests/hypotheses";

    export let data;

    const margin = {left: 70, right: 20, bottom: 50, top: 20}
    const width = 400;
    const height = 600;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const scaleY = scaleBand().domain(hypotheses.map(h => h.code)).range([0, innerHeight])

    const maxAbsTime = Math.max(... data.flatMap(datum => [datum['nullity'], datum['proposed']]).flatMap(d => d.timeCI.map(Math.abs))) * 1.1;
    const maxAbsError = 1;
    const scaleXTime = scaleLinear().domain([-maxAbsTime, maxAbsTime]).range([0, innerWidth]).nice()
    const scaleXError = scaleLinear().domain([-maxAbsError, maxAbsError]).range([0, innerWidth]).nice()


    console.log('h data', data)
    $: timeXAxis = null;
    $: timeYAxis = null;

    $: errorXAxis = null;
    $: errorYAxis = null;

    $: if (timeXAxis) {
        select(timeXAxis).call(axisBottom(scaleXTime).tickSizeOuter(0).tickFormat(t => t + 's'))
    }

    $: if (errorXAxis) {
        select(errorXAxis).call(axisBottom(scaleXError).tickSizeOuter(0).tickFormat(format('.0%')))
    }

    $: if (timeYAxis) {
        select(timeYAxis).call(axisLeft(scaleY).tickSizeOuter(0)).selectAll('.tick').each(function (t, i, nodes) {
            const line = select(this)
                .selectAll('line')

            if(i === 0){
                return line.remove();
            }

            line
                .attr('transform', `translate(0, ${-scaleY.bandwidth() / 2})`)
                .attr('shape-rendering', 'crispEdges')
                .clone()
                .attr('x2', innerWidth)
                .attr('stroke-width', 0.5)
                .attr('stroke', '#BEBEBE')
                .attr('stroke-dasharray', '2 1')
                .attr('shape-rendering', 'crispEdges')
        })
    }

    $: if (errorYAxis) {
        select(errorYAxis).call(axisLeft(scaleY).tickSizeOuter(0)).selectAll('.tick').each(function (t, i, nodes) {
            const line = select(this)
                .selectAll('line')

            if(i === 0){
               return line.remove();
            }
            line
                .attr('shape-rendering', 'crispEdges')
                .attr('transform', `translate(0, ${-scaleY.bandwidth() / 2})`)
                .clone()
                .attr('x2', innerWidth)
                .attr('stroke-width', 0.5)
                .attr('stroke', '#BEBEBE')
                .attr('stroke-dasharray', '2 1')
                .attr('shape-rendering', 'crispEdges')
        })
    }


    // console.log('data', data);
    // const maxTime = Math.max(...data.map(d => Math.max(Math.max(...d.nullity.timeCI), Math.max(...d.proposed.timeCI))));

    // console.log('maxTime', maxTime);

    const segmentWidth = 5;
    const segmentPadding = 12;

    const nullityColor = '#9E9E9E';
    const proposedColor = schemeTableau10[2];

</script>
<style>
    line {
        shape-rendering: crispEdges;
    }
    line.wall {
        /*shape-rendering: crispEdges;*/
        stroke: #BEBEBE;
        stroke-width: 1px;
        stroke-dasharray: 2 1;
    }

    line.zero {
        stroke: #222221;
        stroke-width: 1px;
        stroke-dasharray: 0 0;
    }

    text.difficulty {
        font-size: 12px;
        fill: #222221;
    }
</style>
<p>Time</p>
<svg height={height} width={width}>
    <g transform={`translate(${margin.left},${margin.top})`}>
        <g bind:this={timeXAxis} transform={`translate(0,${innerHeight})`}></g>
        <g bind:this={timeYAxis}></g>
        <line class="zero" x1={scaleXTime(0) + 0.5} y1={0} x2={scaleXTime(0) + 0.5} y2={innerHeight}></line>
        <line class="wall" x1={innerWidth + 0.5} y1={0} x2={innerWidth +0.5} y2={innerHeight}></line>
        <line class="wall" x1={0} y1={0.5} x2={innerWidth + 0.5} y2={0.5}></line>
        <text class="difficulty" y="-5" x={innerWidth / 2 + 10} text-anchor="start">Harder ⟶</text>
        <text class="difficulty" y="-5" x={innerWidth / 2 - 10} text-anchor="end">⟵ Easier</text>
        {#each data as datum}
            <g transform={`translate(0, ${scaleY(datum.hypothesis) + scaleY.bandwidth()/2 - segmentPadding})`}>
                <line y1="0" x1={scaleXTime(datum.proposed.timeCI[0])} y2="0" x2={scaleXTime(datum.proposed.timeCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXTime(datum.proposed.timeCI[0])} y2={segmentWidth}
                      x2={scaleXTime(datum.proposed.timeCI[0])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXTime(datum.proposed.timeCI[1])} y2={segmentWidth}
                      x2={scaleXTime(datum.proposed.timeCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <circle cx={scaleXTime(datum.proposed.averageTime)} r={segmentWidth} fill={proposedColor}></circle>
            </g>
        {/each}

        {#each data as datum}
            <g transform={`translate(0, ${scaleY(datum.hypothesis) + scaleY.bandwidth()/2 + segmentPadding})`}>
                <line y1="0" x1={scaleXTime(datum.nullity.timeCI[0])} y2="0" x2={scaleXTime(datum.nullity.timeCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXTime(datum.nullity.timeCI[0])} y2={segmentWidth}
                      x2={scaleXTime(datum.nullity.timeCI[0])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXTime(datum.nullity.timeCI[1])} y2={segmentWidth}
                      x2={scaleXTime(datum.nullity.timeCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <circle cx={scaleXTime(datum.nullity.averageTime)} r={segmentWidth} fill={nullityColor}></circle>
            </g>
        {/each}
    </g>
</svg>

<p>Error</p>
<svg height={height} width={width}>
    <g transform={`translate(${margin.left},${margin.top})`}>
        <g bind:this={errorXAxis} transform={`translate(0,${innerHeight})`}></g>
        <g bind:this={errorYAxis}></g>
        <line class="zero" x1={scaleXError(0) + 0.5} y1={0} x2={scaleXError(0) + 0.5} y2={innerHeight}></line>
        <line class="wall" x1={innerWidth + 0.5} y1={0} x2={innerWidth + 0.5} y2={innerHeight}></line>
        <line class="wall" x1={0} y1={0.5} x2={innerWidth + 0.5} y2={0.5}></line>
        <text class="difficulty" y="-5" x={innerWidth / 2 + 10} text-anchor="start">Harder ⟶</text>
        <text class="difficulty" y="-5" x={innerWidth / 2 - 10} text-anchor="end">⟵ Easier</text>
        {#each data as datum}
            <g transform={`translate(0, ${scaleY(datum.hypothesis) + scaleY.bandwidth()/2 - segmentPadding})`}>
                <line y1="0" x1={scaleXError(datum.proposed.errorCI[0])} y2="0" x2={scaleXError(datum.proposed.errorCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXError(datum.proposed.errorCI[0])} y2={segmentWidth}
                      x2={scaleXError(datum.proposed.errorCI[0])}
                      stroke={proposedColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXError(datum.proposed.errorCI[1])} y2={segmentWidth}
                      x2={scaleXError(datum.proposed.errorCI[1])}
                      stroke={proposedColor} stroke-width="1"></line>
                <text font-size="18px" font-weight="bolder" dominant-baseline="middle" text-anchor="middle" x={scaleXError(datum.proposed.averageError)}
                      fill={proposedColor}>x</text>
            </g>
        {/each}

        {#each data as datum}
            <g transform={`translate(0, ${scaleY(datum.hypothesis) + scaleY.bandwidth()/2 + segmentPadding})`}>
                <line y1="0" x1={scaleXError(datum.nullity.errorCI[0])} y2="0" x2={scaleXError(datum.nullity.errorCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXError(datum.nullity.errorCI[0])} y2={segmentWidth}
                      x2={scaleXError(datum.nullity.errorCI[0])}
                      stroke={nullityColor} stroke-width="1"></line>
                <line y1={-segmentWidth} x1={scaleXError(datum.nullity.errorCI[1])} y2={segmentWidth}
                      x2={scaleXError(datum.nullity.errorCI[1])}
                      stroke={nullityColor} stroke-width="1"></line>
                <text font-size="18px" font-weight="bolder" dominant-baseline="middle" text-anchor="middle" x={scaleXError(datum.nullity.averageError)}
                      fill={nullityColor}>x</text>
            </g>
        {/each}
    </g>
</svg>
