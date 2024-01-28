// this is the main app module

// import * as readline from 'node:readline';
// import {stdin as input, stdout as output} from 'node:process'; 

// // custom module / locale
// import { data_week } from "./data.mjs"


// const io = readline.createInterface({ input, output });


// io.question('Choose the day (1..7) ', day_number => {
//     // console.log( day_number, typeof day_number);
//     // HW1:  what if the user inputs the day name ----> 'Monday' ----> 'Tuesday' ----> 'Wednesday'
//     // HW2: what if the user inputs a range ----> 1..3, 'Monday'..'Wednesday'

//     // find algorithm
//     data_week.forEach( ( day, index ) => {
    //         if ( index + 1 == +day_number ) {
        //             console.log(`[${day.date}]: ${day.temp}`)
        //         }
        //     })
        
        //     io.close()
        // })

        
// global module
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

// custom module / locale
import { data_week } from "./data.mjs"

const io = readline.createInterface({ input, output });

io.question('Select a day (between 1 and 7, or a valid day of the week, or 3 days such as 2..4 or wednesday..friday). ', day_input => {

    // convert the input to lowercase to avoid capitalization differences
    // const lowercase_input = day_input.toLowerCase();
    
    // switch (lowercase_input) {
    //     case '1':
    //     case 'monday':
    //         console.log(data_week[0].date, data_week[0].day, data_week[0].temp + '°C');
    //         break;
    //     case '2':
    //     case 'tuesday':
    //         console.log(data_week[1].date, data_week[1].day, data_week[1].temp + '°C');
    //         break;
    //     case '3':
    //     case 'wednesday':
    //         console.log(data_week[2].date, data_week[2].day, data_week[2].temp + '°C');
    //     break;
    //     case '4':
    //     case 'thursday':
    //         console.log(data_week[3].date, data_week[3].day, data_week[3].temp + '°C');
    //     break;
    //     case '5':
    //     case 'friday':
    //         console.log(data_week[4].date, data_week[4].day, data_week[4].temp + '°C');
    //     break;
    //     case '6':
    //     case 'saturday':
    //         console.log(data_week[5].date, data_week[5].day, data_week[5].temp + '°C');
    //         break;
    //     case '7':
    //     case 'sunday':
    //         console.log(data_week[6].date, data_week[6].day, data_week[6].temp + '°C');
    //         break;
    //     case '1..3':
    //     case 'monday..wednesday':
    //         console.log(data_week[0].date, data_week[0].day, data_week[0].temp + '°C');
    //         console.log(data_week[1].date, data_week[1].day, data_week[1].temp + '°C');
    //         console.log(data_week[2].date, data_week[2].day, data_week[2].temp + '°C');
    //     break;
    //     case '2..4':
    //     case 'tuesday..thursday':
    //         console.log(data_week[1].date, data_week[1].day, data_week[1].temp + '°C');
    //         console.log(data_week[2].date, data_week[2].day, data_week[2].temp + '°C');
    //         console.log(data_week[3].date, data_week[3].day, data_week[3].temp + '°C');
    //     break;
    //     case '3..5':
    //     case 'wednesday..friday':
    //         console.log(data_week[2].date, data_week[2].day, data_week[2].temp + '°C');
    //         console.log(data_week[3].date, data_week[3].day, data_week[3].temp + '°C');
    //         console.log(data_week[4].date, data_week[4].day, data_week[4].temp + '°C');
    //     break;
    //     case '4..6':
    //     case 'thursday..saturday':
    //         console.log(data_week[3].date, data_week[3].day, data_week[3].temp + '°C');
    //         console.log(data_week[4].date, data_week[4].day, data_week[4].temp + '°C');
    //         console.log(data_week[5].date, data_week[5].day, data_week[5].temp + '°C');
    //     break;
    //     case '5..7':
    //     case 'friday..sunday':
    //         console.log(data_week[4].date, data_week[4].day, data_week[4].temp + '°C');
    //         console.log(data_week[5].date, data_week[5].day, data_week[5].temp + '°C');
    //         console.log(data_week[6].date, data_week[6].day, data_week[6].temp + '°C');
    //     break;
    //     default:
    //         console.log('Invalid input. Please enter a number between 1 and 7 or a valid day of the week.');
            
    // }

    //            v v v 
    //            v v v 
    
    const daysMap = {
    '1': 0,
    'monday': 0,
    '2': 1,
    'tuesday': 1,
    '3': 2,
    'wednesday': 2,
    '4': 3,
    'thursday': 3,
    '5': 4,
    'friday': 4,
    '6': 5,
    'saturday': 5,
    '7': 6,
    'sunday': 6,
    '1..3': [0, 1, 2],
    'monday..wednesday': [0, 1, 2],
    '2..4': [1, 2, 3],
    'tuesday..thursday': [1, 2, 3],
    '3..5': [2, 3, 4],
    'wednesday..friday': [2, 3, 4],
    '4..6': [3, 4, 5],
    'thursday..saturday': [3, 4, 5],
    '5..7': [4, 5, 6],
    'friday..sunday': [4, 5, 6]
};

const input = day_input.toLowerCase();

if (daysMap[input] !== undefined) {
    if (Array.isArray(daysMap[input])) {
        daysMap[input].forEach(dayIndex => {
            console.log(data_week[dayIndex].date, data_week[dayIndex].day, data_week[dayIndex].temp + '°C');
        });
    } else {
        console.log(data_week[daysMap[input]].date, data_week[daysMap[input]].day, data_week[daysMap[input]].temp + '°C');
    }
} else {
    console.log('Invalid input. Please enter a number between 1 and 7, or a valid day of the week, or 3 days such as 2..4 or wednesday..friday.');
}


    io.close();
});


