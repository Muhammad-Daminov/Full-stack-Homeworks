class BankAccount {
    constructor(balance){
        this.balance = balance;
    };
    
    deposit(sum) {
        try{
            if (sum <= 0){
                throw new Error("0 dan katta son kiriting!");
            }else {
                this.balance += sum;
            };
            
        }catch(err) {
            console.error(err.message);
        };
    };
    
    withdraw(sum) {
        return this.balance < sum ? "Mablag yetarli emas" : "Pul muvaffaqiyatli yechildi!";
    };
    
    getBalance() {
        return this.balance;
    };
}


const account = new BankAccount(100);
account.deposit(20);
console.log(account.withdraw(30));
console.log(account.withdraw(300));
console.log(account.getBalance())