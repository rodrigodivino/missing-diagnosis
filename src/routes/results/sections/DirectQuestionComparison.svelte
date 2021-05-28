<script>
    import {questions} from "../../tests/questions";
    import {scaleBand, scaleLinear} from 'd3'
    import {questionOrder} from "../../tests/questionOrder";
    export let data;

    const margin = {left: 20, right: 20, bottom: 20, top: 20}
    const width = 1000;
    const height = 300;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    const maxTime = Math.max(...data.map(d => Math.max(Math.max(...d.nullity.timeCI), Math.max(...d.proposed.timeCI))));
    const maxError = 1;


    const scaleX = scaleBand().domain(questionOrder).range([0, innerWidth])
    const scaleYTime = scaleLinear().domain([0, maxTime]).range([innerHeight, 0])
    const scaleYError = scaleLinear().domain([0, maxError]).range([innerHeight, 0])

    const timeXAxis = null;
</script>

<style>
    svg {
        margin: 20px;
    }
</style>

<p>Direct Question Comparison Data</p>

<p>Time</p>
<svg height="300" width="1000">
    <rect height="300" width="1000"></rect>
</svg>

<p>Error</p>
<svg height="300" width="1000">
    <rect height="300" width="1000"></rect>
</svg>


