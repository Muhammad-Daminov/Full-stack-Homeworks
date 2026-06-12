const isPerfectNumber = (n) => {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum === n;
};

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));