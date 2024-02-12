const http = require("http");
const { host, port, access_key } = require("./config.json");
const { route } = require("./router");

// ROUTE CONFIG
const routeAliases = [
    { "/products": "/products/all" },    // equivalent
    { "/clients": "/clients/all" },       // equivalent 
]



const server = http.createServer(( { url }, res ) => {

    route( url, routeAliases, res )

});










server.listen(port, host, () => {
    console.log(`> Server running on http://${host}:${port}`);  
});
















// Router components
// frameworks: express, laravel, Angular/React, ... 
//  - multiple modules with individual routes


// REST addresses examples
// route1: /products/all
// route2: /products/{id: 1..100}/details
// route3: /products/2/delete?access={key} 
// ...

// ROUTING:
//   - modules (products, clients, selling, cart, ... )
//   - list of routes --> execute a function


// Collection
