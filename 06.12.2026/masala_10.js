class Account {
    constructor(balance) {
        this.balance = balance;
    }
    getBalanceInfo() {
        return `Base Balance: ${this.balance}`;
    }
}

class DepositAccount extends Account {
    constructor(balance, bonus) {
        super(balance);
        this.bonus = bonus;
    }
    getBalanceInfo() {
        return `${super.getBalanceInfo()}, Bonus: ${this.bonus}`;
    }
}

class PremiumDepositAccount extends DepositAccount {
    constructor(balance, bonus, cashback) {
        super(balance, bonus);
        this.cashback = cashback;
    }
    getBalanceInfo() {
        return `${super.getBalanceInfo()}, Cashback: ${this.cashback}`;
    }
}

const acc = new PremiumDepositAccount(5000, 200, 50);
console.log(acc.getBalanceInfo());