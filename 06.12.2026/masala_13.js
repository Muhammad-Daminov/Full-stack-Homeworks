class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

class Taxi extends Vehicle {
    constructor(type, pricePerKm) {
        super(type);
        this.pricePerKm = pricePerKm;
    }

    calculatePrice(distance) {
        return distance * this.pricePerKm;
    }
}

const cab = new Taxi("Sedan", 3000);
console.log(cab.calculatePrice(12));