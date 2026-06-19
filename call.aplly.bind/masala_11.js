const salary = {
    monthly: 300
}

Object.defineProperty(salary, "monthly", {
    writable: false,
    enumerable: false,
    configurable: false,
});

salary.monthly = 500;
console.log(salary.monthly);

delete salary.monthly;
console.log(salary.monthly);

console.log(salary);