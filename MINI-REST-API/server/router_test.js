const fs = require('fs')

// ROUTE LOGIC

exports.route = function (url, aliases, res) {
    const [path, queryString] = url.split('?');
    let params = {};

    if (queryString) {
        params = queryString.split('&').reduce((acc, param) => {
            const [key, value] = param.split('=');
            return { ...acc, [key]: value };
        }, {});
    }

    let alias = aliases.find(obj => obj[path]);
    alias = alias ? alias[path] : path;

    let [moduleName, functionName] = alias.split('/');
    
    if (fs.existsSync(`./modules/${moduleName}.js`)) {
        const modelObject = require(`./modules/${moduleName}`);
        res.end(modelObject[functionName](params));
    } else {
        res.end('404 - NOT FOUND');
    }
}



// products/delete?id=1&access=123 