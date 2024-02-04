const Food = require("./food/Food");
const { save, load } = require('./persistance');


// save(new Food("Salad", 50), "./persistance/data/food.json"); 

let data = load( "./persistance/data/food.json" )
console.log(data);
console.log(data.print());



// Food ---> json ---> Object




// test 
/*
class A {}
class B {}

let a = new A();
let b = new B();

// reflection
console.log(a.constructor.name, b.constructor.name)

*/