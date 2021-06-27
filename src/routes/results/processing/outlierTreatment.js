function questionTookTooMoreThan5Minutes(question) {
    return question.elapsedTime > (5 * 60);
}

function userTookMoreThanHour(user) {
    return user.quantitativeData.some(q => q.elapsedTime > 60 * 60)
}

function userTookMoreThan5Minutes3Times(user) {
    return user.quantitativeData.filter(q => questionTookTooMoreThan5Minutes(q)).length >= 3;
}

export function outlierTreatment(results) {
    const finalUserData = [];
    const userOutliers = [];
    const questionOutliers = [];

    results.forEach(user => {
        if(userTookMoreThanHour(user) || userTookMoreThan5Minutes3Times(user)) {
            userOutliers.push(user);
        } else {
            finalUserData.push(user);
            const outlierQuestions = user.quantitativeData.filter(q => questionTookTooMoreThan5Minutes(q));
            user.quantitativeData = user.quantitativeData.filter(q => !questionTookTooMoreThan5Minutes(q));
            questionOutliers.push({
                user, outlierQuestions
            })
        }
    })
    return {
        finalUserData,
        userOutliers,
        questionOutliers,
    }
}
