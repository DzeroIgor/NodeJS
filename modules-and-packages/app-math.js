// Module: main

console.log("App starting ...");

const {add, sub, mul, div} = require("./math.js");

let result = add(20,30)

console.log(result)

console.log("App finished .") 


// HW1: 
/* 
using ONLY 4 functions from "math"
calculate the average temperature
value ( < temperature.json > )
IGNORE NaN values
calculate error (%)

types.js  (type module)
          *isNumber()

!! [ 100, -100, 0.5, NaN, 1.0 ]



function filterNumbers(array) {
    return array.filter(item => Number.isFinite(item));
}

const inputArray = [100, -100, 0.5, NaN, 1.0];
const filteredNumbers = filterNumbers(inputArray);
console.log(filteredNumbers); // Output: [100, -100, 0.5, 1]

or

function filterNumbers(array) {
    return array.filter(item => !isNaN(item));
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