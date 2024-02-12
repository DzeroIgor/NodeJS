const fs = require('fs')

// ROUTE LOGIC
exports.route = function ( url, aliases, res ) {
    // HW!: spread/ destructuring/ ??

    const path = url.split('?')[0]
    const queryString = url.split('?')[1]
    let params

    if ( queryString ) {
        params = queryString.split("&").map( value => {
            let obj = {}
            obj[value.split("=")[0]] = value.split("=")[1]
            return obj
        })
        
    }

    let alias = aliases.find(obj => obj[path])
    alias = alias ? alias[ path ] : path

    let segments = alias.split("/");
    let moduleName   = segments[1] 
    let functionName = segments[2]

    if (
        // fs.accessSync(`./modules/${moduleName}.js`) == fs.constants.F_OK  // ????
        fs.existsSync(`./modules/${moduleName}.js`)
        ) {
        const modelObject = require(`./modules/${moduleName}`)
        res.end( modelObject[functionName](params) );
    } else {
        res.end("404 - NOT FOUND")
    }
}

// products/delete?id=1&access=123 