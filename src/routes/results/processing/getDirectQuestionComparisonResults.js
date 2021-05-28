import {questions} from "../../tests/questions";
import {ascending, mean, quantile} from 'd3-array';
import {resample} from "../../../utils/resample";
import {questionOrder} from "../../tests/questionOrder";

function getErrorRates(errors) {
    return 1 - errors.filter(d=>d).length / errors.length
}
export function getDirectQuestionComparisonResults(results) {
    const ALPHA = 0.05;
    return questions.sort((a,b) => ascending(questionOrder.indexOf(a.id), questionOrder.indexOf(b.id))).map(question => {
        const processedGroupResult = {};
        for (let group of ['proposed', 'nullity']) {
            const groupData = results.filter(g => g.group === group).map(r => r.quantitativeData).map(d => d.find(d => d.id === question.id));
            const times = groupData.map(d => d.elapsedTime)
            const errors = groupData.map(d => d.answer === question.answer)
            const averageTime = mean(times)
            const errorRate = getErrorRates(errors);
            const bootstrappedAverageTimes = [];
            const bootstrappedErrorRates = [];
            for (let N = 0; N < 20000; N++) {
                bootstrappedAverageTimes.push(mean(resample(times)))
                bootstrappedErrorRates.push(getErrorRates(resample(errors)))
            }
            bootstrappedAverageTimes.sort(ascending)
            bootstrappedErrorRates.sort(ascending)
            const timeCI = [quantile(bootstrappedAverageTimes, ALPHA / 2), quantile(bootstrappedAverageTimes, 1 - (ALPHA / 2))]
            const errorCI = [quantile(bootstrappedErrorRates, ALPHA / 2), quantile(bootstrappedErrorRates, 1 - (ALPHA / 2))]
            processedGroupResult[group] = {
                times,
                errors,
                averageTime,
                errorRate,
                bootstrappedAverageTimes,
                bootstrappedErrorRates,
                timeCI,
                errorCI
            }
        }

        return {
            question: question.id,
            proposed: processedGroupResult.proposed,
            nullity: processedGroupResult.proposed,
        }
    });
}
