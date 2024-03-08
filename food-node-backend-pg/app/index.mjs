
import { sql, createTable, createFood, getAllFood, getFoodCheapFirst, getFoodExpensiveFirst, getFoodByPriceRange, getFoodByPartialName, updateFood, deleteFood } from './orm.mjs'

const foodList =[
  {
    id:1,
    name: 'Pizza',
    price_amount: 100,
    currency: 'MDL',
    available: 15
  },
  {
    id:2,
    name:'Salad',
    price_amount: 40,
    currency: 'MDL',
    available: 5n
  },
  {
    id:3,
    name: 'Soup',
    price_amount: 70,
    currency: 'MDL',
    available: 20
  },
  {
    id:4,
    name: 'Bread',
    price_amount: 5,
    currency: 'MDL',
    available: 50
  },
  {
    id:5,
    name: 'Potatoes',
    price_amount: 50,
    currency: 'MDL',
    available: 15
  },
]

// await createTable ()


// async function processFoodList(foodList) {
//     await Promise.all(foodList.map(async (food) => {
//         await createFood(food);
//     }));
// }
// await processFoodList(foodList);



// await updateFood({id: 2, price_amount: 30}) 

// await deleteFood({id: 2}) 

const food = await getAllFood()
const cheap = await getFoodCheapFirst()
const expensive = await getFoodExpensiveFirst()
const min_max = await getFoodByPriceRange(40, 80)
const keyword = await getFoodByPartialName(`zz`)

console.table(food)
// console.table(cheap)
// console.table(expensive)
console.table(keyword)

sql.end()