import {ascending, quantile, extent, mean, sum} from "d3";

export function computeErrorMatrix(data, columns, columnTypes) {
    const errorMatrix = new Array(columns.length).fill(0).map(()=>new Array(columns.length).fill(null))
    for(let i=0;i<columns.length;i++){
        const iDim = columns[i];
        const sampleSize = sum(data.map(d=>d[iDim] === null));
        errorMatrix[i][i] = sampleSize;
        if(sampleSize === 0) continue;
        for (let j=0;j<columns.length;j++){
            if(i===j) continue;
            const jDim = columns[j];
            let population = data.map(d=>d[jDim]);
            let subsample = data.filter(d=>d[iDim]===null).map(d=>d[jDim]);
            if(columnTypes[j] === "Continuous"){
                const binRules = FreedmanDiaconis(population); 
                const populationBins = Histogram(population, binRules);
                const expectedBins = populationBins.map(b=>({...b, count:(sampleSize/data.length)*b.count}));
                const subsampleBins = Histogram(subsample, binRules);
                errorMatrix[i][j] = CompareBins(expectedBins, subsampleBins);
            } else {
                const levels = Levels(population)
                const populationBins = Count(population, levels)
                const expectedBins = populationBins.map(b=>({...b, count:(sampleSize/data.length)*b.count}));
                const subsampleBins = Count(subsample, levels);
                errorMatrix[i][j] = CompareBins(expectedBins, subsampleBins)
            }
        }
    }
    return errorMatrix;
}

export function RefineEstimative(data, columns, columnTypes, errorMatrix, previousEstimative=null, R=100) {
    const estimativeMatrix = new Array(columns.length).fill(0).map(()=>new Array(columns.length).fill(null));
    for(let i=0;i<columns.length;i++){
        const sampleSize = errorMatrix[i][i];
        if (sampleSize === 0) continue;
        for(let j=0;j<columns.length;j++){
            if(i===j) continue;
            const jDim = columns[j];
            let population = data.map(d=>d[jDim]);
            const binRules = FreedmanDiaconis(population);             
            let populationBins;
            if(columnTypes[j] === "Continuous"){
                populationBins = Histogram(population, binRules);
            } else {
                populationBins = Count(population, levels);
            }
            const expectedBins = populationBins.map(b=>({...b, count:(sampleSize/data.length)*b.count}));
            estimativeMatrix[i][j] = 0;
            for(let n=0;n<R;n++){
                let subsample = Resample(population, sampleSize);
                let subsampleBins;
                if(columnTypes[j] === "Continuous"){
                    subsampleBins = Histogram(subsample, binRules);
                } else {
                    subsampleBins = Count(subsample, levels);
                }
                estimativeMatrix[i][j] += CompareBins(subsampleBins,expectedBins) >= errorMatrix[i][j]? 1: 0
            }
            estimativeMatrix[i][j] = estimativeMatrix[i][j]/R;
            if(previousEstimative){
                const weight = previousEstimative[0][0];
                estimativeMatrix[i][j] = (estimativeMatrix[i][j] + weight*previousEstimative[i][j])/(weight+1); 
                estimativeMatrix[0][0] = previousEstimative[0][0];
                estimativeMatrix[1][1] = previousEstimative[1][1];
            }
        }
    }
    
    estimativeMatrix[0][0]++;
    estimativeMatrix[1][1] += R;
    console.log(estimativeMatrix);
    return estimativeMatrix;
    
}


function Count(array, levels){
    let bins = new Array(levels.length+1);
    for(let i = 0; i < levels.length; i++){
        bins[i] = {
            name: levels[i],
            count: 0
        };
    }
    for (let i = 0; i < array.length; i++){
        const value = array[i];
        if(value===null) continue;
        const bin = levels.indexOf(value);
        bins[bin].count++;
    }
    bins[bins.length-1] = {name: 'miss', count: array.filter(v=>v===null).length}

    return bins;
}

function Levels(array){
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
}

function CompareBins(bins1, bins2) {
    const squareErrors = [];
    for (let i=0; i< bins1.length; i++) {
        const bin1 = bins1[i];
        const bin2 = bins2[i];
        squareErrors.push(Math.pow((bin2.count - bin1.count), 2));
    }
    
    return Math.sqrt(mean(squareErrors));
}

function Histogram(array, rules){
    let binName = 0;
    let bins = new Array(rules.numOfBins+1);
    for(let i = 0; i < rules.numOfBins; i++){
        bins[i] = {
        name: binName,
        minNum: rules.min+i*rules.binWidth,
        maxNum: rules.min+(i+1)*rules.binWidth,
        count: 0
        };
        binName++;
    }    
    for (let i = 0; i < array.length; i++){
        const value = array[i];
        if(value===null) continue;
        const binNumber = Math.floor((value - rules.min) / rules.binWidth);
        bins[binNumber].count++ 
    }
    bins[bins.length-1] = {name: 'miss', count: array.filter(v=>v===null).length}

    return bins;
}
function FreedmanDiaconis(population) {
    const iqr = (array) => {
        array.sort(ascending);
        const q1 = quantile(array, .25)
        const q3 = quantile(array, .75)
        return q3 - q1
    }
    const freedmanDiaconis = (array) => {
        return 2*(iqr(array)/Math.pow(array.length, 1/3));
    }

    const binWidth = freedmanDiaconis(population.filter(d=> d !== null ));
    const [min,max] = extent(population);
    const numOfBins = Math.ceil ( Math.abs(min-max) / binWidth );
    return {binWidth, min, numOfBins};
}


export function computeMCARProbabilities(data, variables) {
    const probabilityData = [];
    for (let treatmentVariable of variables) {
        const treatmentIsNull = new Array(data.length);

        let sampleSize = 0;
        
        for(let i=0;i<data.length;i++){
            if(data[i][treatmentVariable] === null){
                treatmentIsNull[i] = true;
                sampleSize++;
            }     
            else {
                treatmentIsNull[i] = false;
            } 
        }

        
        if(sampleSize > 0) {
            for (let measurementVariable of variables) {
                if (treatmentVariable !== measurementVariable) {

                    const population = data.map(d=> d[measurementVariable]);

                    const subsample = data.filter(d => d[treatmentVariable] === null).map(d=> d[measurementVariable]);
                    
                    if(subsample.length === 0) continue;
        
                    const sampleSize = subsample.length/data.length;
        
        
                    const binner = new Binner(population)
                    const populationBins = binner.bin(population)
                    const subsampleBins = binner.bin(subsample)
                    
                    for (let i=0; i< subsampleBins.length; i++) {
                        const bin = subsampleBins[i]
                        const subsampleCount = bin.count;
                        const expectedCount = populationBins[i].count * sampleSize
                        const squareError = Math.pow((subsampleCount - expectedCount), 2);
        
                        bin.expectedCount = expectedCount
                        bin.squareError = squareError;
                    }
                
                    const RMSEList = bootstrapRMSE(population, sampleSize, populationBins, binner)
                    const RMSE = Math.sqrt(mean(subsampleBins.map(v=>v.squareError)))
        
                    let MCARchance = 1;
                    for (let bootRMSE of RMSEList) {
                        if (RMSE < bootRMSE) MCARchance++;
                    }
                    MCARchance = MCARchance / (RMSEList.length+1)
                    probabilityData.push({
                        treatmentVariable, measurementVariable, MCARchance,
                        populationBins, subsampleBins
                    })
                }
            }
        }

    }
    return probabilityData;

}



function bootstrapRMSE(population, sampleSize, populationBins, binner){
    const REPETITIONS = 100;
    const RMSEList = [];
    for(let n=0; n<REPETITIONS; n++){
        const resample = Resample(population, sampleSize)
        const resampleBins = binner.bin(resample)
    
    
        for (let i=0; i< resampleBins.length; i++) {
            const bin = resampleBins[i]
            const resampleCount = bin.count;
            const expectedCount = populationBins[i].count * sampleSize
            const squareError = Math.pow((resampleCount - expectedCount), 2);
    
            bin.expectedCount = expectedCount
            bin.squareError = squareError;
        }
    
        const RMSE = Math.sqrt(mean(resampleBins.map(v=>v.squareError)))
        RMSEList.push(RMSE);
    }
    return RMSEList;
}

function Resample(array, sampleSize) {
    const bucket = [];

    for (let i=0;i < array.length;i++) {
        bucket.push(i);
    }
    
    const getRandomFromBucket = () => {
       const randomIndex = Math.floor(Math.random()*bucket.length);
       return bucket.splice(randomIndex, 1)[0];
    }
    
    const resample = [];
    for(let i = 0; i < sampleSize; i++) {
        resample.push(array[getRandomFromBucket()])
    }
    
    return resample
}


class Binner {
    constructor(domain){
        this.binWidth = this.freedmanDiaconis(domain.filter(d=> d !== null ));
        const [min,max] = extent(domain)
        this.min = min;
        this.numOfBuckets = Math.ceil ( Math.abs(min-max) / this.binWidth );
    }

    
    bin(array) { 
        let binName = 0;
        let bins = [];
        for(let i = 0; i < this.numOfBuckets; i++){
          bins.push({
            name: binName,
            minNum: this.min+i*this.binWidth,
            maxNum: this.min+(i+1)*this.binWidth,
            count: 0
          });
          binName++;
        }
    
        for (let i = 0; i < array.length; i++){
          const value = array[i];
          const binNumber = Math.floor((value - this.min) / this.binWidth);
          bins[binNumber].count++ 
        }
        bins.push({name: 'miss', count: array.filter(v=>v===null).length})

        return bins;
    }

    freedmanDiaconis(array){
        return 2*(this.iqr(array)/Math.pow(array.length, 1/3));
    }

    iqr(array){
        array.sort(ascending);
        const q1 = quantile(array, .25)
        const q3 = quantile(array, .75)
        return q3 - q1
    }
}

