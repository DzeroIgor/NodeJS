const { log } = require("console")

function calcValues ( a, b ) {
    return [
        a+b,
        a-b,
        a*b,
        a/b
    ]
}

const [ sum, sub,, ...other] = calcValues ( 42, 10 )

// console.log ( sum, sub, other )


const person = {
    name: 'John',
    age: 23,
    address: {
        country: 'United States',
        city: 'Washington',
    }
}

// const { name: firstName, age, car = "no car!", address: {city: homeTown, country}} = person

// console.log ( firstName, age, car, homeTown )
const { name, ...info} = person

// console.log ( name, info )

function logPerson ( {name, age} ) {
    console.log ( name + " " + age )
}

logPerson (person)