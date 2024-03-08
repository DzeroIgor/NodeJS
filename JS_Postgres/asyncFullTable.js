const { Client } = require('pg')
const client = new Client ( {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "igordb"
})

execute()
async function execute () {
    try {
        await client.connect()
        console.log("Connected successfully.")
        // await client.query("insert into employees values (106, 'Kenny')")

        const {rows} = await client.query("select * from employees")
        console.table(rows)
    }
    catch (ex) {
        console.log(`Something wrong happened ${ex}`)
    }
    finally {
        await client.end()
        console.log("Client disconnected successfully.")        
    }
} 
