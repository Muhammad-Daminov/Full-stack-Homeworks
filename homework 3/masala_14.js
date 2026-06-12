const multiplyDigits = (num) => {
    const str = String(num);
    let product = 1;

    for (let i = 0; i < str.length; i++) {
        product *= Number(str[i]);
    }

    return product;
};

console.log(multiplyDigits(234)); 
console.log(multiplyDigits(506));