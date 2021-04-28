<script>
    import {canvasHeight, canvasWidth} from "../../stores.js";

    export let x = 0;
    export let y = 0;
    export let width = 1;
    export let height = 1;
    export let convergence;
    export let lang;

    const margin = {top: 2, bottom: 2, left: 0, right: 0};
    $: innerWidth = width * $canvasWidth - margin.left - margin.right;
    $: innerHeight = height * $canvasHeight - margin.top - margin.bottom;
</script>

<style>
    rect.background {
        opacity: 0.1;
    }

    text.label {
        stroke: black;
        font-size: 0.8em;
        text-anchor: middle;
        alignment-baseline: middle;
    }

    text.axis-name {
        font-size: 1em;
    }
</style>

<g
        class="outerRing"
        transform="translate({x * $canvasWidth}, {y * $canvasHeight})">
    <g class="marginConvention" transform="translate({margin.left},{margin.top})">
        <rect
                class="background"
                fill={convergence <= 0.5 ? 'mediumseagreen' : convergence <= 5 ? 'gold' : 'coral'}
                height={innerHeight}
                width={innerWidth}></rect>
        <rect
                class="foreground"
                fill={convergence <= 0.5 ? 'mediumseagreen' : convergence <= 5 ? 'gold' : 'coral'}
                height={innerHeight}
                width={innerWidth * (convergence / 100)}
                x={innerWidth / 2 - (innerWidth * (convergence / 100)) / 2}></rect>
        <text class="label" x={innerWidth / 2} y={innerHeight / 2}>
            {((convergence / 100) * 100).toFixed(2)}%
        </text>
        <text
                alignment-baseline="middle"
                class="axis-name"
                x={10}
                y={innerHeight / 2}>
            {lang === 'pt' ? 'Progresso da Convergência' : 'Convergence Progress'}
        </text>
    </g>
</g>
