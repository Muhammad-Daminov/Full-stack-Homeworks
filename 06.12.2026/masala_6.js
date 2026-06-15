class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

class Customer extends User {
    constructor(username, email, ordersCount) {
        super(username, email);
        this.ordersCount = ordersCount;
    }

    getCustomerType = function() {
        if (this.ordersCount > 20) {
            return "VIP Customer";
        }
        return "Regular Customer";
    };
}

const client = new Customer("daminov", "daminov@mail.com", 25);
console.log(client.getCustomerType());