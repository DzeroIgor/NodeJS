// Module: main

console.log("App starting ...");

const {add, sub, mul, div} = require("./math.js");
const {filterNumbers} = require("./type.js");

let temperatures = [
    10, -3, 3.14, -1.5, NaN, undefined, 7, 8.9, NaN, 5,
    0, 1.234, 15, NaN, 7, -2.5, 20, 0.123, 6, undefined,
    10, -3.14, 2, NaN, undefined, 6.28, -0, 10, 2, 9
];

const numbTemp = filterNumbers(temperatures);

let sumNumb = numbTemp.reduce((acc, currentValue) => add(acc, currentValue), 0);
// console.log(sumNumb.toFixed(2))

const average = div(sumNumb, numbTemp.length);
console.log('Average temperature is:', average.toFixed(2) + '°C')

const nanValue = sub(temperatures.length, numbTemp.length)
const tempLength = temperatures.length;
const errorPercentage = mul( (div(nanValue, tempLength)) , 100);
console.log( 'error is:', errorPercentage.toFixed(2) + "%");

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

*/