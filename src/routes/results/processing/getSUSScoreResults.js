import {ascending, mean, quantile, sum} from 'd3'
import {resample} from "../../../utils/resample";

export function getSUSScoreResults(results) {
    const ALPHA = 0.05;
    const output = {
        proposed: {
            avg: 0,
            CI: [0, 0]
        },
        nullity: {
            avg: 0,
            CI: [0, 0]
        }
    }
    for(let group of ['proposed', 'nullity']) {
        const groupData = results.filter(u => u.group === group)
        const qualitativeData = groupData.map(d => d.qualitativeData)
        const scores = qualitativeData.map(scoreSUS)

        const avg = mean(scores)

        const bootstrappedSUSScores = [];
        for (let N = 0; N < 20000; N++) {
            bootstrappedSUSScores.push(mean(resample(scores)))
        }
        bootstrappedSUSScores.sort(ascending)
        const CI = [quantile(bootstrappedSUSScores, ALPHA / 2), quantile(bootstrappedSUSScores, 1 - (ALPHA / 2))]

        output[group].avg = avg;
        output[group].CI = CI;
    }
    return output
}

const scores = {
    'strong_disagree': 1,
    'disagree': 2,
    'neutral': 3,
    'agree' : 4,
    'strong_agree': 5,
}

function scoreSUS(qualitativeDatum) {
    const positiveMode = q => !!(parseFloat(q.id.match(/(\d+)/)[0]) % 2)

    const userScores = qualitativeDatum.map(question => {
        const rawScore = scores[question.answer]
        return positiveMode(question) ? (rawScore - 1) : (5 - rawScore)
    })

    return sum(userScores) * 2.5
}

const sample = {
    questionId: '1',
    proposed: [],
    nullity: [],
}
