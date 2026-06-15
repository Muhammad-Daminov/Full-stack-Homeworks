class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Food extends Product {
    constructor(name, price, expirationDays) {
        super(name, price);
        this.expirationDays = expirationDays;
    }

    isFresh = () => this.expirationDays > 0 ? "Fresh" : "Expired";
}

const milk = new Food("Milk", 12000, 5);
console.log(milk.isFresh());