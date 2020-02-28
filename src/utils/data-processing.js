import {quantile} from 'd3'

export const getLineObjects = (data) => {
    const dataObjects = []
    for (const treatmentVariable of data.columns){
        for (const measurementVariable of data.columns){
        if (treatmentVariable === measurementVariable) continue;
        
        const missingDistribution = [];
        const wholeDistribution = [];
        let minValueInMeasurement = Infinity;
        let maxValueInMeasurement = -Infinity;

        for (let entry of data) {
            const variableValue = entry[measurementVariable]
            if (variableValue === null) continue
            wholeDistribution.push(variableValue)

            const treatmentVariableValueIsNull = entry[treatmentVariable] === null
            if(treatmentVariableValueIsNull) {
                missingDistribution.push(variableValue)
            }

            if(variableValue < minValueInMeasurement) minValueInMeasurement = variableValue;
            if(variableValue > maxValueInMeasurement) maxValueInMeasurement = variableValue;
        }

        if(missingDistribution.length === 0 || wholeDistribution.length === 0) continue;

        const norm = v => (v - minValueInMeasurement) / (maxValueInMeasurement - minValueInMeasurement);
        
        const normMissingDist = missingDistribution.map(d=>norm(d)).sort()
        const normPresentDist = wholeDistribution.map(d=>norm(d)).sort()
        const numberOfQuantiles = Math.max(normMissingDist.length, normPresentDist.length)
        
        const quantilePercentages = new Array(numberOfQuantiles).fill(0).map((d,i)=>i/(numberOfQuantiles-1))
        const quantilesOfMissingDistribution = quantilePercentages.map(p=>quantile(normMissingDist, p))
        const quantilesOfWholeDistribution = quantilePercentages.map(p=>quantile(normPresentDist, p))
        
        const lineObject =[];
        for (let i=0; i<quantilePercentages.length; i++){

            lineObject.push({
                x: quantilesOfMissingDistribution[i],
                y: quantilesOfWholeDistribution[i],
                mag: computeMagnitude(quantilesOfMissingDistribution[i], quantilesOfWholeDistribution[i])
            })
        }
        
        const dataObject = {
            treatmentVariable,
            measurementVariable,
            lineObject
        }
        dataObjects.push(dataObject)
    } 
    }
    return dataObjects
}

function computeMagnitude (x,y) {
    return x + y
}