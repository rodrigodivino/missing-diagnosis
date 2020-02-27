<script>
    import {canvasWidth, canvasHeight} from "../../stores.js"
    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;

    const margin = {top: 2, bottom: 2, left: 2, right: 2};
    $: innerWidth = width * $canvasWidth - margin.left - margin. right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;

        

</script>


<g transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <rect width={width * $canvasWidth} height={height * $canvasHeight} fill='black'></rect>
    <g transform="translate({margin.left},{margin.top})">
        <rect width={innerWidth} height={innerHeight} fill='white'></rect>
    </g>
</g>


<style>

</style>