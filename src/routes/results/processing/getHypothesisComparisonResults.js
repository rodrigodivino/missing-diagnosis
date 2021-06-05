export function getHypothesisComparisonResults(results) {
    const hypotheses = [
        {
            code: 'H1',
            control: 'Q1',
            test: 'Q2'
        },
        {
            code: 'H2',
            control: 'Q1',
            test: 'Q3'
        },
        {
            code: 'H3',
            control: 'Q1',
            test: 'Q4'
        },
        {
            code: 'H4',
            control: 'Q5',
            test: 'Q6'
        },
        {
            code: 'H5',
            control: 'Q1',
            test: 'Q7'
        },
    ]
    const data = {};
    for(let group of ['nullity', 'proposed']) {
        data
    }
    console.log('inside hypothesis comparison', results)
    return results;
}
