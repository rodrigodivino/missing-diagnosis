<script context="module">
    import {MOCK_RESULTS} from './MOCK_RESULTS'
    import JsonUrl from 'json-url'
    import {getDirectQuestionComparisonResults} from "./processing/getDirectQuestionComparisonResults";
    import {getHypothesisConfirmationResults} from "./processing/getHypothesisConfirmationResults";
    import {getHypothesisComparisonResults} from "./processing/getHypothesisComparisonResults";
    import {getSUSQuestionnaireResults} from "./processing/getSUSQuestionnaireResults";
    import {USER_RESULTS} from "./USER_RESULTS";
    import {answerTable} from "../tests/answerTable";

    const codec = JsonUrl('lzw');


    let directQuestionComparisonResults;
    let hypothesisConfirmationResults;
    let hypothesisComparisonResults;
    let SUSQuestionnaireResults;

    let results = USER_RESULTS;
    results.forEach(r => {
        return r.quantitativeData.forEach(q => {
            q.correct = q.answer === answerTable[q.id]
        })
    })
    directQuestionComparisonResults = getDirectQuestionComparisonResults(results)
    hypothesisConfirmationResults = getHypothesisConfirmationResults(results)
    // SUSQuestionnaireResults = getSUSQuestionnaireResults(results);

    console.log('directQuestionComparisonResults', directQuestionComparisonResults)
    console.log('hypothesisConfirmationResults', hypothesisConfirmationResults)
    // console.log('SUSQuestionnaireResults', 'SUSQuestionnaireResults')

</script>

<script>
    import DirectQuestionComparison from "./sections/DirectQuestionComparison.svelte";
    import HypothesisConfirmation from "./sections/HypothesisConfirmation.svelte";
    // import SUSQuestionnaire from "./sections/SUSQuestionnaire.svelte";

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

<!--    <h2> Qualitative </h2>-->

<!--    <h3> SUS Questionnaire </h3>-->
<!--    <SUSQuestionnaire data={SUSQuestionnaireResults}/>-->


</div>

