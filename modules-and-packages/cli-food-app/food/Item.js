// HW1: ad field "id" 
// HW2: make price - {value:1.00, currency: "USD"} +
// HW3: remake print -> align +

//      1. Salad 
module.exports = class Item {
    constructor( id, name, value, currency ) {
        this.name = name;
        // this.price = price;
        this.id = id;
        this.currency = currency;
        this.value = value;
    }

    print() {
        // return `------------------------------\n` +
        //        `${this.id}. ${this.name}: ${this.value.toFixed(2)} ${this.currency}\n` +
        //        `------------------------------\n` 
        const idWidth = this.id.toString().length;
        const valueToFixed = this.value.toFixed(2);
        const paddingLength = 25 - (idWidth + this.name.length + valueToFixed.length + this.currency.length);

        return `------------------------------\n` +
            `${this.id}. ${this.name}: ${' '.repeat(paddingLength)}${valueToFixed} ${this.currency}\n` +
            `------------------------------\n`;
    }
}