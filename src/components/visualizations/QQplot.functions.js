import {extent, scaleLinear, quantile} from 'd3'

export const getLineObjects = (data) => {
    const allVariables = data.columns;
    const dataObjects = []
    for (const missingVariable of allVariables){
        for (const variable of allVariables){
        if (missingVariable === variable) continue;
        
        const missingDist = data
        .filter(d=>d[missingVariable] === null)
        .map(d=>d[variable])
        .filter(d=>d !== null)
        
        const presentDist = data
        //.filter(d=>d[missingVariable] !== null)
        .map(d=>d[variable])
        .filter(d=>d !== null)
        
        const ext = extent(data.map(d=>d[variable]))
        const norm = scaleLinear().domain(ext).range([0,1])
        if(missingDist.length === 0 || presentDist.length === 0) continue;
        
        const normMissingDist = missingDist.map(d=>norm(d)).sort()
        const normPresentDist = presentDist.map(d=>norm(d)).sort()
        const n_quantiles = Math.max(normMissingDist.length, normPresentDist.length)
        
        const quantiles = new Array(n_quantiles).fill(0).map((d,i)=>i/(n_quantiles-1))
        const missingQuantiles = quantiles.map(p=>quantile(normMissingDist, p))
        const presentQuantiles = quantiles.map(p=>quantile(normPresentDist, p))
        const lineObject = presentQuantiles.map((d,i) => {
            return {
            x: d,
            y: missingQuantiles[i]
            }
        })
        
        const dataObject = {
            missingVariable,
            variable,
            lineObject
        }
        dataObjects.push(dataObject)
        }
    }
    return dataObjects
}