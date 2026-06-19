const car = {
    brand: "BMW",
    model: "X5",
    year: 2024,
    
    get getInfo(){
        console.log(this.brand, this.model, this.year)
    }
}
car.getInfo