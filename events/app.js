// HANDLING ERROR / Sync vs Async

// 1) sync ( return + throw / try-catch)
// 2) async - callback ( arguments: error, data )
    // callback hell
// 3) Promise ( async -> code like sync )
    //  f1 -> f2 -> f3    / sequence
    //  f1 , f2 , f3    / parallel

// 1. Sync
// provider
function getData ( json ) {
    let data = JSON.parse( json );
    return data
}

// consumer
function app_s () {
    let data = getData (" { \"name\" : \"JAVASCRIPT\" }")
    console.log( data )
}
// app_s()


// consumer sync + error
function app_e () {
    try {
        let data = getData (" { \"name\" : \"JAVASCRIPT }")
    console.log( data )
    } catch ( error ) {
        console.error( "Data error" )
    }
}
// app_e()


// 2. Async with callback
// provider
function getData ( json, cb ) {
    let data 
    setTimeout(() => {
        data = JSON.parse( json );
        cb( data );
    }, 1000);
    // return data
}

// consumer
function app_a () {
    try {                 // json                   //cb
        getData (" { \"name\" : \"JAVASCRIPT\" }", (data) => {
            console.log( data )
        })
    } catch ( error ) {
        console.error( "Data error" )
    }
}
// app_a()


// 2.1 
// provider
function getData ( json, cb ) {
    let data 
    setTimeout(() => {
        try {
            data = JSON.parse( json );
        cb( data );
        } catch ( error ) {            
            console.error( "Data error" )
            cb ( null, "DATA ERROR" );
        }
    }, 1000);
    // return data
}

// consumer
function app_a () {
    getData (" { \"name\" : \"JAVASCRIPT\" }", 

    ( data, error ) => {
        if ( error ) {
            console.log( error )
        } else {
            console.log( data )        
        }
    } )
}
// app_a()


// 3. Promises
// provider

//  async -> decorator
//  await -> then()


let p = new Promise( () => {})

function getData ( json, cb ) {
    let data 
    setTimeout(() => {
        try {
            data = JSON.parse( json );
        cb( data );
        } catch ( error ) {            
            console.error( "Data error" )
            cb ( null, "DATA ERROR" );
        }
    }, 1000);
    // return data
}

// consumer
function app_a () {
    getData (" { \"name\" : \"JAVASCRIPT\" }", 

    ( data, error ) => {
        if ( error ) {
            console.log( error )
        } else {
            console.log( data )        
        }
    } )
}
// app_a()