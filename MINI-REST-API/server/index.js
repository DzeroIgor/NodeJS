// TODO: switch to https
const http = require("http");
const { host, port, access_key } = require("./config.json");
const fs = require("fs");

// 1. / main page HTML
// 2. / api/* - API requests
// 3. not api and not main --> 404

const server = http.createServer(( { url }, res ) => {

    // routing
    if ( url == "/") {

        const html = fs.readFileSync("./server/public/index.html")
        res.end( html )
        
    } else if ( url.startsWith("/api/") ) {
        
        // split path 
        let path   = url.split("?")[0]
        let params = url.split("?")[1]

        let key = params.split("=")[1]
        // access_key=8a7573128cb51253020c34bbd9daf20b

        if ( key != access_key ) {
            return res.end("Access denied!!!")
        }

        // api routing
        if ( path.endsWith("/products/all") ) {

            const products = fs.readFileSync("./server/data/products.json")
            // !!! NOT JSON DECODED !!!
            res.end( products )

        } else if ( path.endsWith("/products/category") ) {

            const products = JSON.parse(
                // !!! DECODED !!!
                fs.readFileSync("./server/data/products.json")
            ) 
            const productsFiltered = []
            for (let i = 0; i < products.length; i++) {
                if ( products[i].category == "Category 1" ) {
                    productsFiltered.push( products[i] )
                }
            }
            res.end( JSON.stringify( productsFiltered ) )
        } else {
            res.end("API NOT FOUND")
        }
        // api routing

    } else {

        res.end("404")

    }
    // routing


    console.log(`> Server: incoming REQ ${url}`);
                           // req <--- reserved from client
    // res.end("OK")       // send to client
});
 

server.listen(port, host, () => {
    console.log(`> Server running on http://${host}:${port}`);
});







// f(req, res) <--------  SERVER  <-------   REQ  <--------  client
//                                ------->   RES  -------->