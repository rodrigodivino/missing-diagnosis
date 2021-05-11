export function resample(arr) {
    return arr.map(() => arr[getRandomInt(0, arr.length)])
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
