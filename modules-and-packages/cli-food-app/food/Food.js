// HW1: ad field "id" 
// HW2: make price - {value:1.00, currency: "USD"} +
// HW3: remake print -> align +

//      1. Salad 
module.exports = class Food {
    constructor( name, price ) {
        this.name = name;        
        this.price = price;        
    }

    print() {
        // return `------------------------------\n` +
        //        `${this.id}. ${this.name}: ${this.value.toFixed(2)} ${this.currency}\n` +
        //        `------------------------------\n` 
        
        return `------------------------------\n` +
            `${this.name}: ${this.price}\n` +
            `------------------------------\n`;
    }
}