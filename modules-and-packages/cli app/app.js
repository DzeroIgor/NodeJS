
let { menu, printMenu } = require('./p')

function mainLoop() {
  printMenu(menu, option => {
    if (!isNaN(option) && option !== "") { 
      option = parseInt(option); 

      if (option > 0 && option < 6) {
        console.log("You've chosen", menu[option-1].name);
        setTimeout(mainLoop, 500);
      } else {
        console.log("Error: position", option, "is not in menu!");
      }
    } else if (menu.some(item => item.name.toLowerCase() === option.toLowerCase())) {
      const capitalizedOption = option.charAt(0).toUpperCase() + option.toLowerCase().slice(1);
      console.log("You've chosen", capitalizedOption );
      setTimeout(mainLoop, 500);
    } else {
      console.log("Error: Invalid input!");
    }
  });
}

mainLoop()

// save(new Food("Salad", 50), "./persistance/data/food.json"); 

// let data = load( "./persistance/data/food.json" )
// console.log(data);
// console.log(data.print());



// console.log( __dirname )
// console.log( __filename )