class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ElectronicProduct extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }

    getInfo(foiz) {
        return this.price - (this.price * foiz / 100);
    }
}

const laptop = new ElectronicProduct("Asus", 1000, "2 yil");
console.log(laptop.getInfo(20));