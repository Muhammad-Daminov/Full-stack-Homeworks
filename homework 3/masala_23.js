const product = {
    name: "Mouse",
    quantity: 17,
    
    isAvailable(count){
       return count<=this.quantity ? true : false; 
    }
}
console.log(product.isAvailable(17));
