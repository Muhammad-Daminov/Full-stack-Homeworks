class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    static products = ["Olma", "Banana", "Qulpunoy", "Tarvuz"];
    
    static getAllProducts() {
        console.log(Product.products);
    }
}

Product.getAllProducts();