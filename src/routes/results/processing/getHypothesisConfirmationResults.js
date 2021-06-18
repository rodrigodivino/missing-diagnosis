import {hypotheses} from "../../tests/hypotheses";
import {resample} from "../../../utils/resample";
import {mean, ascending, quantile} from 'd3'

export function getHypothesisConfirmationResults(results) {
    const ALPHA = 0.05;

    const data = hypotheses.map(h => {
        const datum = {hypothesis: h.code}
        for (let group of ['proposed', 'nullity']) {
            const groupResults = results.filter(d => d.group === group)
            const hypothesisControlQuestions = groupResults.flatMap(userResult => userResult.quantitativeData.filter(q => q.id.includes(h.control)))
            const hypothesisTestQuestions = groupResults.flatMap(userResult => userResult.quantitativeData.filter(q => q.id.includes(h.test)))

            const controlTimes = hypothesisControlQuestions.map(q => q.elapsedTime);
            const controlErrors = hypothesisControlQuestions.map(q => q.correct);
            const testTimes = hypothesisTestQuestions.map(q => q.elapsedTime);
            const testErrors = hypothesisTestQuestions.map(q => q.correct);


            const bootstrappedTimeDifferences = [];
            const bootstrappedErrorDifferences = [];
            for (let N = 0; N < 20; N++) {
                const resampledControlTimes = resample(controlTimes);
                const resampledControlErrors = resample(controlErrors);
                const resampledTestTimes = resample(testTimes);
                const resampledTestErrors = resample(testErrors);

                const meanControlTime = mean(resampledControlTimes);
                const meanTestTime = mean(resampledTestTimes);

                const meanTimeDifference = meanTestTime - meanControlTime;
                bootstrappedTimeDifferences.push(meanTimeDifference)

                const controlErrorRate = resampledControlErrors.filter(d => !d).length / resampledControlErrors.length;
                const testErrorRate = resampledTestErrors.filter(d => !d).length / resampledControlErrors.length;

                const meanErrorDifference = testErrorRate - controlErrorRate;
                bootstrappedErrorDifferences.push(meanErrorDifference);
            }

            bootstrappedTimeDifferences.sort(ascending);
            bootstrappedErrorDifferences.sort(ascending);
            const timeCI = [quantile(bootstrappedTimeDifferences, ALPHA / 2), quantile(bootstrappedTimeDifferences, 1 - (ALPHA / 2))];
            const averageTime = mean(bootstrappedTimeDifferences);
            const errorCI = [quantile(bootstrappedErrorDifferences, ALPHA / 2), quantile(bootstrappedErrorDifferences, 1 - (ALPHA / 2))];
            const averageError = mean(bootstrappedErrorDifferences);

            datum[group] = {
                timeCI,
                averageTime,
                errorCI,
                averageError,
                controlTimes,
                controlErrors,
                testTimes,
                testErrors,
                bootstrappedTimeDifferences,
                bootstrappedErrorDifferences
            };
        }
        return datum
    })
    return results;
}

