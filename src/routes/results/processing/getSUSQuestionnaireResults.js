import {questionnaires} from "../../tests/questionnaires";

export function getSUSQuestionnaireResults(results) {
    return questionnaires.map(q => {
        const positiveMode = q => !!(parseFloat(q.id.match(/(\d+)/)[0]) % 2)

        const data = {...q}
        for (let group of ['proposed', 'nullity']) {
            data[group] = {};
            const groupData = results.filter(r => r.group === group)
                .flatMap(g => g.qualitativeData).filter(d => d.id === q.id)

            for(const vote of ['strong_negative', 'negative', 'neutral', 'positive', 'strong_positive']) {
                data[group][vote] = groupData.filter(d => {
                    return translateVote(d.answer, positiveMode(d)) === vote;
                }).length / groupData.length;
                data[group]['metadata'] = {group, id: q.id};
            }
        }
        return data;
    });
}

function translateVote(vote, isPositive) {
    if(isPositive) {
        return {
            'strong_agree': 'strong_positive',
            'agree': 'positive',
            'neutral' : 'neutral',
            'disagree': 'negative',
            'strong_disagree': 'strong_negative',
        }[vote]
    } else {
        return {
            'strong_agree': 'strong_negative',
            'agree': 'positive',
            'neutral' : 'neutral',
            'disagree': 'positive',
            'strong_disagree': 'strong_positive',
        }[vote]
    }
}
const sample = {
    questionId: '1',
    proposed: [],
    nullity: [],
}
