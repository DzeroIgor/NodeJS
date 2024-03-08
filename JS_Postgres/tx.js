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
        client.query("BEGIN")
        client.query("update employees set name = $1", ['Mini'])
        const { rows } = await client.query("select * from employees")
        console.table(rows)

        client.query("insert into employees values ($1, $2)", [150, 'Mike'])
        console.log("Inserted a new row")
        client.query("COMMIT")
    }
    catch (err) {
        console.error(`Failed to execute ${err}`)
        await client.query("ROLLBACK")
    }
    finally {
        await client.end()
        console.log("Cleaned")
    }
}