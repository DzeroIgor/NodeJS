let f = (x) => x * x * x

console.log( f(100) )










/*
example Number.isFinite()

function filterNumbers(array) {
    return array.filter(item => Number.isFinite(item));
}

const inputArray = [100, -100, 0.5, NaN, 1.0];
const filteredNumbers = filterNumbers(inputArray);
console.log(filteredNumbers); // Output: [100, -100, 0.5, 1]
 
//////////////////////////////////////////////////////////////

function calculateNonNumberPercentage(array) {
    const nonNumberValues = array.filter(item => !Number.isFinite(item));
    const totalValues = array.length;
    const nonNumberPercentage = (nonNumberValues.length / totalValues) * 100;
    return nonNumberPercentage;
}

const inputArray = [100, -100, 0.5, NaN, 1.0];
const percentage = calculateNonNumberPercentage(inputArray);
console.log(percentage + "%");
*/