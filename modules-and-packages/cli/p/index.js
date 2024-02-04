// - Autoloading
// AUTO IMPORT / EXPORT
// json
// FUNCTION
// classes

const fs = require('fs');

const dir = fs.readdirSync('./p')
const path = require('path');

function removeExtensions(fileNames) {
    return fileNames.map(fileName => path.basename(fileName, path.extname(fileName)));
}

dir.forEach(fileName => {
    if (!fileName.endsWith('.json') && fileName !== 'index.js') {

        const moduleName = removeExtensions([fileName])[0];
        module.exports[moduleName] = require('./' + fileName);
    }
});


// dir.forEach( (fileName) => {
//     if (
//         !fileName.endsWith('.json') &&
//         fileName != 'index.js' ) 
//         {                   
//             module.exports[fileName] = require('./' + fileName )
//         }
//     } 
// )

// dir.filter().map()