// menu functionality
const readline = require('readline');

const rl = readline.createInterface({ 
    input:  process.stdin, 
    output: process.stdout 
});

module.exports.printMenu = ( menu, cb ) => {

    menu.forEach( item => console.log(item.print()) );
    
    rl.question('Choose position of the food >>', option => {
        cb ( option )
        // rl.close()
    })
}

// module.exports.printMessage = ( message ) => {
//     console.log( `${message} >> ` )
// }

