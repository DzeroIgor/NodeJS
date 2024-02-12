

// 1. we have an async

function f () {
//  timer, event, AJAX, ...
}
// 2. WRAP - f() -> Promise
// new Promise( f ) // async options


//    [ promise in  ]
//    <   f1() {}   >
//    [ promise out ]
//          v
//    [ promise in  ]
//    <   f2() {}   >
//    [ promise out ]
//          v
//    [ promise in  ]
//    <   f3() {}   >
//    [ promise out ]



/*


new Promise ( (resolve, reject) => {
    setTimeout( () => {
        resolve("All good!!!");
    }, 3000)
}).then( () => {
    console.log("Step 1!");
}).then( () => {
    console.log("Step 2!");
}).then( () => {
    console.log("Job done!");
}).catch( () => {
    console.log("Error")
})


new Promise ( (resolve, reject) => {
    setTimeout( () => {
        resolve("All good!!!");
    }, 3000)
}).then( (data) => {
    console.log("Step 1!", data);
    return data
}).then( (data) => {
    console.log("Step 2!", data);
    return data
}).then( (data) => {
    console.log("Job done!", data);
    return data
}).catch( (error) => {
    console.log("Error!!!", error);
})

///////////////////////////////////////////////

let p1 = new Promise ( (resolve, reject) => {
    setTimeout( () => {
        resolve("Data 1!!!");
    }, 3000)
}).then( (data) => {
    console.log("Step 1!", data);
    return data
}).then( (data) => {
    console.log("Step 2!", data);
    return data
}).then( (data) => {
    console.log("Job done!", data);
    return data
}).catch( (error) => {
    console.log("Error!!!", error);
})

let p2 = new Promise ( (resolve, reject) => {
    setTimeout( () => {
        resolve("Data 2!!!");
    }, 1000)
}).then( (data) => {
    console.log("Step 1!", data);
    return data
}).then( (data) => {
    console.log("Job done!", data);
    return data
}).catch( (error) => {
    console.log("Error!!!", error);
})

Promise.all([p1, p2]).then( values => console.log(values))




*/