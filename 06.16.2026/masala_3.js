class Account {
    #password;
    constructor(password){
        this.#password = password;
    }
    
    checkPassword(password){
        if (this.#password == password){
            console.log("Parol Togri");
        }else {
            console.log("Parol Notogri");
        }
    }
    
    changePassword(oldPass, newPass){
        if (oldPass == this.#password){
            this.#password = newPass;
        }else {
            console.log("Parol Xoto");
        }
    }
}
const account = new Account("daminovm");
account.checkPassword("daminovm");
account.changePassword('daminovm', "mdaminov" );