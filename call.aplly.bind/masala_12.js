const person = {
    firstName: "Eshmat",
    lastName: "Ishmatov",
    get fullName() {
        console.log(this.firstName, this.lastName)
    }
}
person.fullName;