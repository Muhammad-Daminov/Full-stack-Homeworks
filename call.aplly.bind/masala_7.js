const employee = {
    name: "Eshmat",
    lastName: "ishmatov",
    age: 24
}
Object.defineProperty(employee, 'lastName',{ enumerable: false});
console.log(employee);