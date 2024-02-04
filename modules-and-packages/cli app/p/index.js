// - Autoloading
// AUTO IMPORT / EXPORT
// json
// FUNCTION
// classes



/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');

const dir = fs.readdirSync('./p')
const path = require('path');

// Function for removing extensions
function removeExtensions(fileNames) {
    return fileNames.map(fileName => path.basename(fileName, path.extname(fileName)));
}

dir.forEach(fileName => {
    if (!fileName.endsWith('.json') && fileName !== 'index.js') {

        const moduleName = removeExtensions([fileName])[0];
        module.exports[moduleName] = require('./' + fileName);
    }
});
console.log("dir is: ", dir)


module.exports.menu = require("./menu").menu
let helpers = require("./helpers");

module.exports.printMenu = helpers.printMenu;
module.exports.printMessage = helpers.printMessage;

/*
const fs = require('fs');
const path = require('path');

// Funcția pentru eliminarea extensiilor
function removeExtensions(fileNames) {
    return fileNames.map(fileName => path.basename(fileName, path.extname(fileName)));
}

// Directorul
const dir = fs.readdirSync('./p');

// Obiectul pentru exporturi
const exportedModules = {};

// Exporturile automate
dir.forEach(fileName => {
    if (!fileName.endsWith('.json') && fileName !== 'index.js') {
        const moduleName = removeExtensions([fileName])[0];
        exportedModules[moduleName] = require('./' + fileName);
    }
});

// Importul și exporturile suplimentare
const helpers = require('./helpers');

exportedModules.menu = require('./menu').menu;
exportedModules.printMenu = helpers.printMenu;
exportedModules.printMessage = helpers.printMessage;

// Exportul final
module.exports = exportedModules;

*/