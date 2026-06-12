const sumOfDigits = (n) => {
    let sum = 0;
    
    while (n > 0){
        let qoldiq = n % 10;
        sum += qoldiq;
        n = parseInt(n /10);
    }
    return sum;
}

console.log(sumOfDigits(123));
