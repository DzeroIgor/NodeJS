const { Client } = require('pg')

const client = new Client ( {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "igordb"
})

client.connect()
.then( () => console.log("Connected successfully")  )
// .then( () => client.query("select * from employees") )
.then( () => client.query("insert into employees values ($1, $2)", [105, 'Mark']) )
.then( () => client.query("select * from employees") )
.then( results => console.table( results.rows) )
.catch( e => console.log(e) )
.finally( () => client.end() )