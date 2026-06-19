const user = {
    password: "12345678",
    
    isStrongPassword() {
        console.log(this.password >= 8 ? true : false);
    }
}

user.isStrongPassword();