import {ascending, quantile, extent, mean} from "d3";

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
        const resample = doResample(population, sampleSize)
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

function doResample(array, sampleSize) {
    const bucket = [];

    for (let i=0;i < array.length;i++) {
        bucket.push(i);
    }
    
    const getRandomFromBucket = () => {
       const randomIndex = Math.floor(Math.random()*bucket.length);
       return bucket.splice(randomIndex, 1)[0];
    }
    
    const resample = [];
    for(let i = 0; i < sampleSize*array.length; i++) {
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

