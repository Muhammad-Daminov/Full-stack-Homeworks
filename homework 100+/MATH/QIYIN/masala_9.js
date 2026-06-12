function splitIntegerAndDecimal() {
    let randomNum = (Math.random() * 100).toFixed(4); 
    let num = parseFloat(randomNum);

    let integer = Math.trunc(num);
    let decimal = parseFloat((num - integer).toFixed(4)); 

    return {
        fullNumber: num,
        integer: integer,
        decimal: decimal
    };
}

console.log(splitIntegerAndDecimal());