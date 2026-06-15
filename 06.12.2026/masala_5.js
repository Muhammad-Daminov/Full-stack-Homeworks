class Device {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class Laptop extends Device {
    constructor(brand, model, ram) {
        super(brand, model);
        this.ram = ram;
    }

    getStatus = () => this.ram >= 16 ? "High Performance" : "Standard Performance";
}

const myLaptop = new Laptop("Asus", "ROG", 16);
console.log(myLaptop.getStatus());