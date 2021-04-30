<script>


    import {canvasHeight, canvasWidth} from "../stores";
    import {scaleBand, scaleLinear, scaleOrdinal} from 'd3-scale';
    import {descending, range} from 'd3-array'
    import {schemeSet1, schemeSet2, schemeSet3} from 'd3-scale-chromatic'
    import NullityColumn from "./NullityColumn.svelte";

    export let data;
    export let lang;

    let clickedLabel = null;
    let highlightedLabels = [];
    function handleLabelClick(event, label) {
        if(event.ctrlKey){
            if(highlightedLabels.includes(label)) {
                highlightedLabels = highlightedLabels.filter(d=>d!==label)
            } else {
                highlightedLabels.push(label);
                highlightedLabels = highlightedLabels.slice();
            }
        } else {
            clickedLabel = label;
        }

    }

    const categoricalLegendsFor = data.columns[data.types.indexOf('Categorical')];
    $: sortedData = data.slice().sort((a, b) => {
        if (data.types[data.columns.indexOf(clickedLabel)] === 'Categorical') {
            const nameA = a[clickedLabel] ? a[clickedLabel].toUpperCase() : 'zzzzzzzz';
            const nameB = b[clickedLabel] ? b[clickedLabel].toUpperCase() : 'zzzzzzzz';
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else {
            return descending(a[clickedLabel], b[clickedLabel]);
        }
    })
    $: categoricalSortedData = data.slice().sort((a, b) => {
        const nameA = a[categoricalLegendsFor] ? a[categoricalLegendsFor].toUpperCase() : 'zzzzzzzz';
        const nameB = b[categoricalLegendsFor] ? b[categoricalLegendsFor].toUpperCase() : 'zzzzzzzz';
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    $: categoricalLegendLabel = [...new Set(data.slice().sort((a, b) => descending(a[categoricalLegendsFor], b[categoricalLegendsFor])).map(d => d[categoricalLegendsFor]))]

    const margin = {top: 100, left: 10, right: 10, bottom: 100}
    $: innerWidth = $canvasWidth - margin.left - margin.right;
    $: innerHeight = $canvasHeight - margin.top - margin.bottom;

    $: xScale = scaleBand().domain(data.columns).range([0, innerWidth]).padding(0.05)
    $: rectHeight = innerHeight / data.length;

    $: categoricalColorScale = scaleOrdinal().domain([...new Set(categoricalSortedData.map(d => d[categoricalLegendsFor]))]).range([...schemeSet3, ...schemeSet2, ...schemeSet1])
    $: legendColorScale = scaleLinear().domain([0, 1]).range(['white', 'steelblue'])
</script>

<style>

</style>

<svg height={$canvasHeight} width={$canvasWidth}>
    <g transform='translate({margin.left},{margin.top})'>
        {#each data.columns as label, i}
            <g opacity={(highlightedLabels.length === 0 || highlightedLabels.includes(label)) ? 1:0.2}>
                <text on:click={handleLabelClick(event, label)} cursor="pointer"
                     font-size="16px" transform="translate({xScale(label) + xScale.bandwidth() / 2}, -5)rotate(-30)"> {label} </text>
                <g transform="translate({xScale(label)},0)">
                    <NullityColumn {categoricalColorScale} categorical={data.types[i] === 'Categorical'} data={sortedData}
                                   column={label}
                                   width={xScale.bandwidth()} height={innerHeight}/>
                </g>
            </g>
        {/each}
        <!--        <rect height={innerHeight} width={innerWidth}></rect>-->
        <g class="color-legend" transform="translate(0,{innerHeight + 10})">
            {#each range(1000) as i}
                <rect
                        y={margin.bottom / 6}
                        x={i * ((innerWidth - 150) / 1000)}
                        width={(innerWidth - 150) / 1000 + 1}
                        height={margin.bottom / 5}
                        fill={legendColorScale(i / 1000)}></rect>
            {/each}


            <rect
                    fill="#71706F"
                    height={margin.bottom / 5}
                    stroke="#71706F"
                    width={100}
                    x={(innerWidth - 100)}
                    y={margin.bottom / 6}>
            </rect>

            <text
                    font-size="16px"
                    text-anchor="middle"
                    x={innerWidth - 100 / 2}
                    y={10}>
                <!-- 8 is for print mode -->
                {lang==='pt'? 'Dado faltante':'Missing Data'}
            </text>

            <rect
                    fill="none"
                    height={margin.bottom / 5}
                    stroke="black"
                    stroke-width="1"
                    width={innerWidth - 150}
                    x={0}
                    y={margin.bottom / 6}></rect>


            <text
                    font-size="16px"
                    text-anchor="start"
                    x={0}
                    y={10}>
                <!-- 8 is for print mode -->
                {lang==='pt'? '< Valor baixo':'< Low value'}
            </text>

            <text
                    font-size="16px"
                    text-anchor="middle"
                    x={(innerWidth - 100)/2}
                    y={10}>
                <!-- 8 is for print mode -->
                {lang==='pt'? 'Valor mediano':'Medium Value'}
            </text>
            <text
                    font-size="16px"
                    text-anchor="end"
                    x={innerWidth - 150}
                    y={10}>
                <!-- 8 is for print mode -->
                {lang==='pt'? 'Valor alto >':'High Value >'}
            </text>
        </g>
        {#if categoricalLegendsFor}
            <g class="categorical-legend" transform="translate(0,{innerHeight + 60})">
                <text
                        font-size="16px"
                        text-anchor="start"
                        x={0}
                        y={15 + 10}>
                    <!-- 8 is for print mode -->
                    {categoricalLegendsFor + ': '}
                </text>
                {#each categoricalColorScale.domain().filter(d=>d!==null) as label, i}
                    <text
                            font-size="16px"
                            text-anchor="middle"
                            x={(i+1)*200 + 75 / 2}
                            y={10}>
                        <!-- 8 is for print mode -->
                        {label}
                    </text>

                    <rect
                            fill={categoricalColorScale(label)}
                            height={margin.bottom / 5}
                            width={75}
                            stroke="#050505"
                            stroke-width="1"
                            shape-rendering="crispEdges"
                            x={(i+1)*200}
                            y={15}>
                    </rect>
                {/each}
            </g>
        {/if}
    </g>


</svg>
