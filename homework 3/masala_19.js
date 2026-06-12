const sumEvenDigits = (num) => {
    const str = String(num);
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let digit = Number(str[i]);

        if (digit % 2 === 0) {
            sum += digit;
        }
    }

    return sum;
};

console.log(sumEvenDigits(2346));
console.log(sumEvenDigits(1357)); 