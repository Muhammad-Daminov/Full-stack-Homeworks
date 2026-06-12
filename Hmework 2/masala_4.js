const reverseNumber = (n) => {
    let reversed = 0;
    
    while (n > 0 ){
        let qoldiq = n % 10;
        reversed = (reversed * 10) + qoldiq;
        n = parseInt(n/10);
    }
    return reversed;
}
console.log(reverseNumber(12345))