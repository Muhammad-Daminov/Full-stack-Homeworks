const user = {
    ism: "muhammad",
    get name(){
        return this.ism.toUpperCase()
    }
}
console.log(user.name);