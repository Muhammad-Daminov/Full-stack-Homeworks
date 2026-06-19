const account = {
    balance: 500000,
    
    canWithdraw(amount){
       return amount < this.balance ? true : false;
    }
}
console.log(account.canWithdraw(500002));