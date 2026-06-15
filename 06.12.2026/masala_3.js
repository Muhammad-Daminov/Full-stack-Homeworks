class Account {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

class SavingsAccount extends Account {
    constructor(owner, balance, percent) {
        super(owner, balance);
        this.percent = percent;
    }

    addPercent() {
        return this.balance + (this.balance * this.percent / 100);
    }
}

const myAccount = new SavingsAccount("Ali", 1000, 12);
console.log(myAccount.addPercent());