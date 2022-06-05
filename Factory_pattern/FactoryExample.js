var { Car, Truck } = require('./Types');

// Define a skeleton vehicle factory
function VehicleFactory() { };

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function (options) {
    if (options.vehicleType === 'car') {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }

    return new this.vehicleClass(options);
};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'black',
    doors: 6
});

// Outputs
console.log(car instanceof Car); // true

var movingTruck = carFactory.createVehicle({
    vehicleType: 'truck',
    state: 'damaged',
    color: 'red',
    wheelSize: 'small'
});

console.log(movingTruck instanceof Truck);

/*---------------------------*/
function TruckFactory() { };

TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myTruck = truckFactory.createVehicle({
    state: "not damaged",
    color: "red",
    wheelSize: "large"
});

console.log(myTruck instanceof Truck);

