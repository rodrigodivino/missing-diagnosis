<script context="module">
    import {MOCK_RESULTS} from './MOCK_RESULTS'
    import JsonUrl from 'json-url'
    import {getDirectQuestionComparisonResults} from "./processing/getDirectQuestionComparisonResults";
    import {getHypothesisConfirmationResults} from "./processing/getHypothesisConfirmationResults";
    import {getHypothesisComparisonResults} from "./processing/getHypothesisComparisonResults";
    import {getSUSQuestionnaireResults} from "./processing/getSUSQuestionnaireResults";

    const codec = JsonUrl('lzw');


    let directQuestionComparisonResults;
    let hypothesisConfirmationResults;
    let hypothesisComparisonResults;
    let SUSQuestionnaireResults;
    Promise.all(MOCK_RESULTS.map(compressed => codec.decompress(compressed))).then(r => {
		directQuestionComparisonResults = getDirectQuestionComparisonResults(r)
        hypothesisConfirmationResults = getHypothesisConfirmationResults(r)
        hypothesisComparisonResults = getHypothesisComparisonResults(r)
        SUSQuestionnaireResults = getSUSQuestionnaireResults(r);
    })

</script>

<script>
    import DirectQuestionComparison from "./sections/DirectQuestionComparison.svelte";
    import HypothesisConfirmation from "./sections/HypothesisConfirmation.svelte";
    import HypothesisComparison from "./sections/HypothesisComparison.svelte";
    import SUSQuestionnaire from "./sections/SUSQuestionnaire.svelte";

</script>

<style>
    div.container {
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 20px;
    }
</style>

<svelte:head>
    <title>Results</title>
</svelte:head>

<div class="container">
    <h1>Results</h1>

    <h2> Quantitative </h2>
    <h3>Direct Question Comparisons</h3>
    <DirectQuestionComparison data={directQuestionComparisonResults}/>

    <h3>Hypothesis Confirmations</h3>
    <HypothesisConfirmation data={hypothesisConfirmationResults}/>

    <h3>Hypothesis Comparisons</h3>
    <HypothesisComparison data={hypothesisComparisonResults}/>

    <h2> Qualitative </h2>

    <h3> SUS Questionnaire </h3>
    <SUSQuestionnaire data={SUSQuestionnaireResults}/>



</div>

