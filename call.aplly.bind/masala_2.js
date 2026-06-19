const employee = {
    name: "Eshmat",
    lastName: "ishmatov",
    age: 24
}

console.log( Object.getOwnPropertyDescriptor(employee, 'name'));
console.log( Object.getOwnPropertyDescriptor(employee, 'lastName'));
console.log( Object.getOwnPropertyDescriptor(employee, 'age'));