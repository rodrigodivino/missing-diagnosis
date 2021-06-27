<script context="module">
    import {MOCK_RESULTS} from './MOCK_RESULTS'
    import JsonUrl from 'json-url'
    import {getDirectQuestionComparisonResults} from "./processing/getDirectQuestionComparisonResults";
    import {getHypothesisConfirmationResults} from "./processing/getHypothesisConfirmationResults";
    import {getHypothesisComparisonResults} from "./processing/getHypothesisComparisonResults";
    import {getSUSQuestionnaireResults} from "./processing/getSUSQuestionnaireResults";
    import {USER_RESULTS} from "./USER_RESULTS";
    import {answerTable} from "../tests/answerTable";
    import {outlierTreatment, questionTookTooMoreThan5Minutes} from "./processing/outlierTreatment";

    const codec = JsonUrl('lzw');


    let directQuestionComparisonResults;
    let hypothesisConfirmationResults;
    let hypothesisComparisonResults;
    let SUSQuestionnaireResults;

    let rawResultsDoNotUseWithoutFilter = USER_RESULTS;
    rawResultsDoNotUseWithoutFilter.forEach(r => {
        return r.quantitativeData.forEach(q => {
            q.correct = q.answer === answerTable[q.id]
        })
    })
    let {finalUserData, userOutliers, questionOutliers} = outlierTreatment(rawResultsDoNotUseWithoutFilter)

    userOutliers.forEach(userOutlier => {
        console.warn(`
        ---USER OUTLIER (FULLY REMOVED)---

        Group: ${userOutlier.group}

        Outlier Questions: ${JSON.stringify(userOutlier.quantitativeData.filter(q => questionTookTooMoreThan5Minutes(q)), null, 2)}

        User Completion ID: ${userOutlier.dateCompleted}

        `)
    })

    questionOutliers.forEach(question => {
        console.warn(`
        ---QUESTION OUTLIER (ONLY QUESTION REMOVED)---

        Group: ${question.user.group}

        Outlier Questions: ${JSON.stringify(question.outlierQuestions, null, 2)}

        User Completion ID: ${question.user.dateCompleted}

        `)
    })

    console.log('questionOutliers', questionOutliers);

    directQuestionComparisonResults = getDirectQuestionComparisonResults(finalUserData)
    hypothesisConfirmationResults = getHypothesisConfirmationResults(finalUserData)
    SUSQuestionnaireResults = getSUSQuestionnaireResults(finalUserData);

    console.log('user results', finalUserData)
    console.log('directQuestionComparisonResults', directQuestionComparisonResults)
    console.log('hypothesisConfirmationResults', hypothesisConfirmationResults)
    console.log('SUSQuestionnaireResults', SUSQuestionnaireResults)

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

