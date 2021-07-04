<script>
    import {axisBottom, scaleBand, scaleLinear, schemeTableau10, select} from "d3";

    export let data;

    const margin = {left: 50, right: 20, bottom: 50, top: 20}
    const width = 512;
    const height = 130;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const scaleX = scaleLinear().domain([0, 100]).range([0, innerWidth]).nice()


    $: XAxis = null;


    $: if (XAxis) {
        select(XAxis).call(axisBottom(scaleX).tickSizeOuter(0)).selectAll('.tick').each(function (t, i, nodes) {
            const line = select(this)
                .selectAll('line')

            if(i=== nodes.length - 1) {
                return line.remove()
            }
            line
                .attr('shape-rendering', 'crispEdges')
                .clone()
                .attr('y2', -innerHeight)
                .attr('stroke-width', 0.5)
                .attr('stroke', '#DEDEDE')
                .attr('stroke-dasharray', '2 1')
                .attr('shape-rendering', 'crispEdges')
        })
    }

    const segmentWidth = 6;
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
</style>
<svg height={height} width={width}>
    <g transform={`translate(${margin.left},${margin.top})`}>
        <g bind:this={XAxis} transform={`translate(0,${innerHeight})`}></g>
        <line class="wall" x1={innerWidth + 0.5} y1={0} x2={innerWidth +0.5} y2={innerHeight}></line>
        <line class="wall" x1={0.5} y1={0} x2={0.5} y2={innerHeight}></line>
        <line class="wall" x1={0} y1={0.5} x2={innerWidth + 0.5} y2={0.5}></line>

        <g transform={`translate(0, ${innerHeight / 2 - segmentPadding})`}>
            <line stroke={proposedColor} stroke-width="1" x1={scaleX(data.proposed.CI[0])} x2={scaleX(data.proposed.CI[1])}
                  y1="0" y2="0"></line>
            <line stroke={proposedColor} stroke-width="1" x1={scaleX(data.proposed.CI[0])}
                  x2={scaleX(data.proposed.CI[0])}
                  y1={-segmentWidth} y2={segmentWidth}></line>
            <line stroke={proposedColor} stroke-width="1" x1={scaleX(data.proposed.CI[1])}
                  x2={scaleX(data.proposed.CI[1])}
                  y1={-segmentWidth} y2={segmentWidth}></line>
            <rect fill={proposedColor}
                  x={scaleX(data.proposed.avg) - segmentWidth / 2}
                  width={segmentWidth}
                  height={segmentWidth} y={-segmentWidth / 2}>
            </rect>
        </g>

        <g transform={`translate(0, ${innerHeight / 2 + segmentPadding})`}>
            <line stroke={nullityColor} stroke-width="1" x1={scaleX(data.nullity.CI[0])} x2={scaleX(data.nullity.CI[1])}
                  y1="0" y2="0"></line>
            <line stroke={nullityColor} stroke-width="1" x1={scaleX(data.nullity.CI[0])}
                  x2={scaleX(data.nullity.CI[0])}
                  y1={-segmentWidth} y2={segmentWidth}></line>
            <line stroke={nullityColor} stroke-width="1" x1={scaleX(data.nullity.CI[1])}
                  x2={scaleX(data.nullity.CI[1])}
                  y1={-segmentWidth} y2={segmentWidth}></line>
            <rect
                    fill={nullityColor}
                    x={scaleX(data.nullity.avg) - segmentWidth / 2}
                    width={segmentWidth}
                    height={segmentWidth}
                    y={-segmentWidth / 2}>
            </rect>
        </g>

    </g>


</svg>
