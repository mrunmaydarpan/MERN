function sumOfArray(array) {
    return array.reduce((init, elem) => init + elem);
}

function findMax(array) {
    return Math.max(...array);
}

function findMin(array) {
    return Math.min(...array);
}

module.exports = [sumOfArray, findMax, findMin];

// or

module.exports = {
    sumOfArray,
    findMax,
    findMin
}