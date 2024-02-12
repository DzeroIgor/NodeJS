let people = [
    { name: "John", age: 21, budget: 3000 },
    { name: "Max",  age: 27, budget: 4500 },
    { name: "Pit",  age: 17, budget: 2500 },
    { name: "Jane", age: 15, budget: 3500 },
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for ( let person of people) {
//     console.log(person)
// }

// forEach
// people.forEach( person => console.log(person))

//Map   ---> convert into new array
// const newPeople = people.map( person => "Hello " + person.name )
// console.log(newPeople)

// Filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push( people[i] )
//     }
// }
// console.log(adults)
//      v     v    v     

// const adults = people.filter ( person => person.age >= 18)
// console.log(adults)

// Reduce
// let amount = 0
// for ( let i=0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount)
//      v     v    v     

// let amount = people.reduce( ( total, person) =>  total + person.budget, 0 )
// console.log(amount)

// Find
// const max = people.find(person => person.name === "Max")
// console.log(max)

// FindIndex
// const maxIndex = people.findIndex(person => person.name === "Max")
// console.log(maxIndex)


// =================================================================

const amount = people
.filter ( person => person.budget >= 3000 )
.map( person => {
    return {
        info: `${person.name} (${person.age})`,
        budget: person.budget
    }
})
.reduce( ( total, person ) => total + person.budget, 0)
console.log(amount)