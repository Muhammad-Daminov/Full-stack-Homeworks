const findArmstrongNumbers = (n) => {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let daraja = i.toString().length;
        let sum = 0;
        let temp = i;

        while (temp > 0) {
            let qoldiq = temp % 10;
            sum += qoldiq ** daraja;
            temp = parseInt(temp / 10);
        }

        if (sum === i) {
            result.push(i);
        }
    }

    return result;
};

console.log(findArmstrongNumbers(1000));