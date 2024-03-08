import postgres from 'postgres'

// connect to the database
const sql = postgres('postgres://food:qazwsx@localhost:7777/food')
// console.log("Connection to database ...")

// FOOD CRUD

// create the table
const createTable = async (food) => {
    await sql`
        CREATE TABLE food (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) UNIQUE,
        price_amount INTEGER,
        currency VARCHAR(3),
        available INTEGER
        );
    `
}

// add foods in the table
const createFood = async (food) => {
    await sql`
            INSERT INTO food VALUES(
                ${food.id},
                ${food.name},
                ${food.price_amount},
                ${food.currency},
                ${food.available}
            );
        `
}

// show all foods from table by ascending id
const getAllFood = async () => {
    const food = await sql`
    SELECT * FROM food
        ORDER BY id ASC;
    `
    return food
}

// show all foods from table by ascending price
const getFoodCheapFirst = async () => {
    const food = await sql`
    SELECT * FROM food
    ORDER BY price_amount ASC;
    `
    return food
}

// show all foods from table by descending price
const getFoodExpensiveFirst = async () => {
    const food = await sql`
        SELECT * FROM food
        ORDER BY price_amount DESC;
    `
    return food
}

// show foods between minPrice and maxPrice from table
const getFoodByPriceRange = async (minPrice, maxPrice) => {
    const food = await sql `
    SELECT * FROM food 
    WHERE price_amount >= ${minPrice} AND 
    price_amount <= ${maxPrice};
    `
    return food
}

// show food by partial name
const getFoodByPartialName = async (keyword) => {
    try {
        const food = await sql `
            SELECT * FROM food
            WHERE name LIKE '%' || ${keyword} || '%';
        `;
        return food;
    } catch (error) {
        console.error("Error in food search:", error);
        throw error;
    }
}

// update data in the table
const updateFood = async (food) => {
    try {
        await sql`
            UPDATE food 
            SET price_amount = ${food.price_amount}
            WHERE id = ${food.id};
        `
    } catch (error) {
        console.error("Error in update food:", error);
        throw error;
    }
    
}

const deleteFood = async (food) => {
    await sql`
        DELETE FROM food
        WHERE id = ${food.id};
    `
} 

// const deleteTable = async () => {
//     sql`
//     DROP TABLE food;
//     `
// }

export { sql, createTable, createFood, getAllFood, getFoodCheapFirst, getFoodExpensiveFirst, getFoodByPriceRange, getFoodByPartialName, updateFood, deleteFood }


// HW1: 
//- 1. refactor the table: id (pk), name (unique), price_amount, price_currency (3), availability
//- 2. refactor the basic CRUD with this property
//- 3. add getFoodByPriceRange(minPrice, maxPrice)
//- 4. add getFoodCheapFirst()
//- 5. add getFoodExpensiveFirst()
//- 6. add getFoodByPartialName(keyword)