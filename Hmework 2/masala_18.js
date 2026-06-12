const findNumbersSum_10 = (n) => {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let temp = i;

        while (temp > 0) {
            sum += temp % 10;
            temp = parseInt(temp / 10);
        }

        if (sum === 10) {
            result.push(i);
        }
    }
    return result;
};

console.log(findNumbersSum10(100));