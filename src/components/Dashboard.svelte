<script>
    import Arc from "./visualizations/Arc.svelte";
    import Progress from "./visualizations/Progress.svelte";
    import List from "./visualizations/List.svelte";
    import {getCrossData, getRenderList} from "../methods/Dashboard.js";
    import {computeEstimativeMatrix} from "../utils/compute-probabilities";
    import {canvasHeight, canvasWidth} from "../stores";

    export let data;

    let lang = 'en'; // 'en'
    // Estimative matrix is the position, the bootstrapped metric
    let [
        estimativeMatrix,
        coMissingEstimativeMatrix,
        binsMatrix,
        refineEstimative
    ] = computeEstimativeMatrix(data, data.validColumns, data.types);
    const columnsWithMissingValues = data.columnsWithMissingValues;


    let convergence = 100;
    let selectedRatioInterval = [1, 0];
    let selectedSamplingVariables = [];
    let selectedMeasurementVariables = [];
    let hoveredPair = null;

    $: crossdata = getCrossData(
        data,
        data.validColumns,
    );

    $: renderList = getRenderList(
        estimativeMatrix,
        selectedRatioInterval,
        selectedSamplingVariables,
        selectedMeasurementVariables
    );

</script>

<style>

</style>

<svg height={$canvasHeight} width={$canvasWidth}>
    <Progress {lang} {convergence} height={0.05} width={0.7} x={0} y={0}/>
    <g class="list-legend" transform='translate({$canvasWidth * 0.7},0)'>
        <g transform="translate(10, {$canvasHeight * 0.0125})">
            <rect fill="mediumseagreen" height={$canvasHeight * 0.025} width={$canvasHeight * 0.025}></rect>
            <text alignment-baseline="middle" font-size="11px" x={$canvasHeight * 0.025 + 5}
                  y={$canvasHeight * 0.0125 + 1.5}> {lang === 'pt' ? 'Mais que o esperado':'More than expected'}
            </text>
        </g>
        <g transform="translate({10 + $canvasWidth * 0.15}, {$canvasHeight * 0.0125})">
            <rect fill="tomato" height={$canvasHeight * 0.025} width={$canvasHeight * 0.025}></rect>
            <text alignment-baseline="middle" font-size="11px" x={$canvasHeight * 0.025 + 5}
                  y={$canvasHeight * 0.0125 + 1.5}> {lang === 'pt' ? 'Menos que o esperado':'Less than expected'}
            </text>
        </g>


        <!--    <rect x={innerWidth * 0.15} width={innerWidth * 0.05} height={innerHeight * 0.05} ></rect>-->
    </g>
    <!-- <Matrix
      x={0}
      y={progress < 1 ? 0.05 : 0}
      width={1}
      height={progress < 1 ? 0.95 : 1}
      colordata={estimativeMatrix}
      glyphdata={binsMatrix}
      columns={data.columns}
      columnTypes={data.types}
      {columnsWithMissingValues}
      refine={refineEstimative}
      bind:progress /> -->
    <Arc
            {lang}
            bind:arcdata={estimativeMatrix}
            bind:colordata={coMissingEstimativeMatrix}
            bind:convergence
            bind:hoveredPair
            bind:selectedMeasurementVariables
            bind:selectedRatioInterval
            bind:selectedSamplingVariables
            {binsMatrix}
            columnTypes={data.types}
            columns={data.columns}
            {columnsWithMissingValues}
            {crossdata}
            height={0.95}
            refine={refineEstimative}
            width={0.7}
            x={0}
            y={0.05}/>

    <List
            {lang}
            bind:hoveredPair
            {binsMatrix}
            colordata={coMissingEstimativeMatrix}
            columnTypes={data.types}
            columns={data.columns}
            {columnsWithMissingValues}
            {crossdata}
            height={0.95}
            {renderList}
            {selectedMeasurementVariables}
            {selectedRatioInterval}
            {selectedSamplingVariables}
            width={0.3}
            x={0.7}
            y={0.05}/>
</svg>
