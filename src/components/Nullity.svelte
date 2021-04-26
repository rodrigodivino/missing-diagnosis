<script>


    import {canvasHeight, canvasWidth} from "../stores";
    import {scaleBand, scaleLinear} from 'd3-scale';
    import {descending, range} from 'd3-array'
    import NullityColumn from "./NullityColumn.svelte";

    export let data;

    let clickedLabel = null;

    function handleLabelClick(label) {
        clickedLabel = label;
    }

    $: sortedData = data.slice().sort((a, b) => descending(a[clickedLabel], b[clickedLabel]))
    const margin = {top: 100, left: 10, right: 10, bottom: 100}
    $: innerWidth = $canvasWidth - margin.left - margin.right;
    $: innerHeight = $canvasHeight - margin.top - margin.bottom;

    $: xScale = scaleBand().domain(data.columns).range([0, innerWidth])
    $: rectHeight = innerHeight / data.length;

    $: legendColorScale = scaleLinear().domain([0, 1]).range(['white', 'steelblue'])
</script>

<style>

</style>

<svg height={$canvasHeight} width={$canvasWidth}>
    <g transform='translate({margin.left},{margin.top})'>
        {#each xScale.domain() as label}
            <text on:click={handleLabelClick(label)} cursor="pointer"
                  transform="translate({xScale(label) + xScale.bandwidth() / 2}, -5)rotate(-45)"> {label} </text>
            <g transform="translate({xScale(label)},0)">
                <NullityColumn data={sortedData} column={label} width={xScale.bandwidth()} height={innerHeight}/>
            </g>
        {/each}
        <!--        <rect height={innerHeight} width={innerWidth}></rect>-->
        <g class="color-legend" transform="translate(0,{innerHeight + 5})">
            {#each range(1000) as i}
                <rect
                        y={margin.bottom / 6}
                        x={i * ((innerWidth - 100) / 1000)}
                        width={(innerWidth - 100) / 1000 + 1}
                        height={margin.bottom / 5}
                        fill={legendColorScale(i / 1000)}></rect>
            {/each}


            <rect
                    fill="#71706F"
                    height={margin.bottom / 5}
                    stroke="#71706F"
                    width={75}
                    x={(innerWidth - 75)}
                    y={margin.bottom / 6}>
            </rect>

            <rect
                    fill="none"
                    height={margin.bottom / 5}
                    stroke="black"
                    stroke-width="1"
                    width={innerWidth - 100}
                    x={0}
                    y={margin.bottom / 6}></rect>


            <text
                    alignment-baseline="hanging"
                    font-size="0.7em"
                    text-anchor="start"
                    x={0}
                    y={0}>
                <!-- 8 is for print mode -->
                {'< Low value'}
            </text>
            <text
                    alignment-baseline="hanging"
                    font-size="0.7em"
                    text-anchor="middle"
                    x={innerWidth - 75 / 2}
                    y={0}>
                <!-- 8 is for print mode -->
                {'Missing Data'}
            </text>
            <text
                    alignment-baseline="hanging"
                    font-size="0.7em"
                    text-anchor="middle"
                    x={(innerWidth - 100)/2}
                    y={0}>
                <!-- 8 is for print mode -->
                {'Medium Value'}
            </text>
            <text
                    alignment-baseline="hanging"
                    font-size="0.7em"
                    text-anchor="end"
                    x={innerWidth - 100}
                    y={0}>
                <!-- 8 is for print mode -->
                {'High Value >'}
            </text>
        </g>
    </g>




</svg>
