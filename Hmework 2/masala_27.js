const tubBoluvchi = (n) => {
    let result = [];

    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            let n = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    n = false;
                    break;
                }
            }
            if (n) {
                result.push(i);
            }
        }
    }

    return result;
};

console.log(tubBoluvchi(100));
console.log(tubBoluvchi(30));