const isPerfectSquare = (num) => {
    const root = Math.sqrt(num);
    return Number.isInteger(root);
};

console.log(isPerfectSquare(25));
console.log(isPerfectSquare(20)); 
console.log(isPerfectSquare(1)); 