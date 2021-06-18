import {questionnaires} from "../../tests/questionnaires";

export function getSUSQuestionnaireResults(results) {
    return questionnaires.map(q => {
        const data = {}
        for (let group of ['proposed', 'nullity']) {
            data[group] = {};
            const groupData = results.filter(r => r.group === group)
                .flatMap(g => g.qualitativeData).filter(d => d.id === q.id)

            for(const vote of ['strong_disagree', 'disagree', 'neutral', 'agree', 'strong_agree']) {
                data[group][vote] = groupData.filter(d => d.answer === vote).length;
            }
        }
        return data;
    });
}

const sample = {
    questionId: '1',
    proposed: [],
    nullity: [],
}
