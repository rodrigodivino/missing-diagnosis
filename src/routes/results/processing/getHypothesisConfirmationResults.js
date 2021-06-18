import {hypotheses} from "../../tests/hypotheses";

export function getHypothesisConfirmationResults(results) {

    console.log('results', results)
    console.log('hypotheses', hypotheses)
    const data = hypotheses.map(h => {
        const datum = {hypothesis: h.code}
        for (let group of ['proposed', 'nullity']) {
            const groupResults = results.filter(d => d.group === group)
            const hypothesisControlQuestions = groupResults.map(userResult => userResult.quantitativeData.filter(q => q.id.includes(h.control)))
            const hypothesisTestQuestions = groupResults.map(userResult => userResult.quantitativeData.filter(q => q.id.includes(h.test)))

            const controlTimes = hypothesisControlQuestions.map(q => q.elapsedTime);
            console.log("controlTimes", controlTimes)
            const controlErrors = [];
            const testTimes = [];
            const testErrors = [];

            datum[group] = {};
        }
        console.log('datum', datum)
        return datum
    })
    return results;
}

