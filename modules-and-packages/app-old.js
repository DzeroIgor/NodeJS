// Module: main
// import {data} from "./config.js"

console.log("App starting ...");


let config = require("./config.js");

console.log(config.__proto__)

console.log(config);
console.log("Supported formats: ")
config.forEach(
    option => {
        console.log("--> " + option);
    }
)

console.log("App finished .") 