const http = require('http');
const { HOST, PATH,  KEY } = require('./config.json')    // -->    b8875bcf7f488e45a29af50a518befe7
// const KEY = require('./config.json')     // -->   { KEY: 'b8875bcf7f488e45a29af50a518befe7' }


// HW1:
// - read city name from console
// - print to console (temp+ min & max, wind, ...)
// - make it interactive
// * debug/ prevent errors

let city

const readline = require('readline');

const rl = readline.createInterface({ 
    input:  process.stdin, 
    output: process.stdout 
});

rl.question('Choose city >>> ', city => {
    // Make the request inside the callback function
    makeRequest(city);
});

function makeRequest(city) {
    // Make a request
    const req = http.request({
        host: HOST,
        path: PATH + `?q=${city}&appid=${KEY}&units=metric`,
        port: 80,
        method: 'GET'
    }, (res) => { // Callback function to handle the response
        const chunks = [];
        res.on('data', (chunk) => {
            chunks.push(chunk);
            const data  = JSON.parse( chunk.toString() );
            // console.log(data);
            console.log('----------------------------------------------------')
            console.log('City:',data.name + ",", 'Country:', data.sys.country)
            console.log('----------------------------------------------------')
            console.log('Temperature:',data.main.temp + "°C" + ",", 'feels like:', data.main.feels_like + "°C")
            console.log('----------------------------------------------------')
            console.log('Minim temperature:',data.main.temp_min + "°C" + ",", 'Maxim temperature:', data.main.temp_max + "°C")
            console.log('----------------------------------------------------')
            console.log('Humidity:',data.main.humidity + "%" + ",", 'Wind:', data.wind.speed , "m/s")
            console.log('----------------------------------------------------')
            console.log('----------------------------------------------------')
            console.log('----------------------------------------------------')            
        });
        res.on('end', () => {
            rl.question('Choose city >>> ', city => {
            // Make the request inside the callback function
                makeRequest(city);
            });
        });
        res.on('error', (error) => {
            console.error('Error:', error);            
        });
    });

    // End the request
    req.end();
}




// *) request LIFE CYCLE !!!