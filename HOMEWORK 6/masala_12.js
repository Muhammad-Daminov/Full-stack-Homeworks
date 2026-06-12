function getMostExpensiveProduct(products) {
    return products.reduce((max, product) => product.price > max.price ? product : max);
}

console.log(getMostExpensiveProduct([
    { name: "Book", price: 50 },
    { name: "Phone", price: 500 },
    { name: "Watch", price: 150 }
])); 