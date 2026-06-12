function getAdultNames(user) {
    return user
        .filter(user => user.age > 18)
        .map(user => user.name);
}

console.log(getAdultNames([
    { name: "Ali", age: 20 },
    { name: "Vali", age: 17 },
    { name: "Sami", age: 25 }
]));