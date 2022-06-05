// A constructor for defining new cars
function Car (options) {
    this.door = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'black';
}

// A constructor for defining new trucks
function Truck (options) {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'green';
}

module.exports = {Car, Truck};