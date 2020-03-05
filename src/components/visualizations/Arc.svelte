<script>
    import {canvasWidth, canvasHeight} from "../../stores.js";
    import {select} from "d3-selection";
    import {scaleLinear} from "d3-scale"
    import {axisLeft, axisBottom} from "d3-axis";
    import {line} from "d3-shape";
    
    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let data;

    const margin = {top: 50, bottom: 50, left: 50, right: 50};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;


</script>


<g class="outerRing" transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect width={width * $canvasWidth} height={height * $canvasHeight} fill='none' stroke='dimgray'></rect>
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <g class="background">
           {console.log(data)}
        </g>
        <g class="foreground">
           
        </g>
    </g>
</g>


<style>

</style>

