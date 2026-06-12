const allDigitsEven = (n) => {
    while (n > 0) {
        let qoldiq = n % 10;
        if (qoldiq % 2 !== 0) {
            return false;
        }
        n = parseInt(n / 10);
    }
    return true;
};

console.log(allDigitsEven(2468));
console.log(allDigitsEven(2458));