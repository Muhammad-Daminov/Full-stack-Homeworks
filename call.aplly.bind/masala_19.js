const employee = {
    salary: 123,
    bonus: 34,
    
    get totalIncome(){
        return this.salary + this.bonus
    }
};
console.log(employee.totalIncome);