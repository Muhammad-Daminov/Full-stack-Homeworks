class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    show() {
        return `Amount: ${this.amount}`;
    }
}

class CardPayment extends Payment {
    constructor(amount, cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }
    show() {
        return `${super.show()}, Card: ${this.cardNumber}`;
    }
}

class UzCardPayment extends CardPayment {
    constructor(amount, cardNumber, bankName) {
        super(amount, cardNumber);
        this.bankName = bankName;
    }
    show = function() {
        return `${super.show()}, Bank: ${this.bankName}`;
    };
}

const bill = new UzCardPayment(450000, "86001234", "Anorbank");
console.log(bill.show());