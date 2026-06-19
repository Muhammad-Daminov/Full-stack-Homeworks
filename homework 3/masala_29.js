const store = {
    income: 1200000,
    expense: 850000,
    
    getProfit(){
        console.log("Sof foyda", this.income - this.expense); 
    }
}
store.getProfit();
