const toBinary = (n) => {
    let binary = "";

    while (n > 0) {
        binary = (n % 2) + binary;
        n = parseInt(n / 2);
    }

    return binary;
};

console.log(toBinary(10));
console.log(toBinary(25));