import {questions} from "./questions";

export const answerTable = questions.reduce((previous, current, index) => {
    previous[current.id] = current.answer;
    return previous;
}, {})
