const fs = require('fs');
const map = require('./map');

// SAVE TO FILE
module.exports.save = ( object, path ) => {
    object.type = object.constructor.name

    fs.writeFileSync(
        path, 
        JSON.stringify(object) 
    )
}

// LOAD FROM FILE
module.exports.load = ( path ) => {

    let data = JSON.parse(
        fs.readFileSync(
        path
        ).toString()
    )
    const Clazz = require( map[data['type']] )
    
    // pass all properties
    let obj = new Clazz ( data.name, data.price )
    return obj
}


// read -> Buffer -> String -> {} -> Food {}


