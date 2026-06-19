class BankAccount {
    #balance = 0;
    
    deposit(amount){
        this.#balance += amount;
    }
    
    withdraw(amount) {
        this.#balance -= amount;
    }
    
    getBalance() {
        return this.#balance
    }
    static bankName = 'UzBank';
}

class Account extends BankAccount {};
const account = new Account (3000);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance());
