class Card {
    #cardNumber;

    constructor(cardNumber) {
        this.#cardNumber = cardNumber.toString();
    }

    getMaskedNumber() {
        const last4 = this.#cardNumber.slice(-4);
        return `**** **** **** ${last4}`;
    }

    static generateId() {
        return 'id' + Math.floor(Math.random() * 100000);
    }
}

const card = new Card(9860256606509592)
console.log(card.getMaskedNumber())
console.log(Card.generateId())