const isArmstrong = (n) => {
    let len = n.toString().length;
    let sum = 0;
    let son = n;
    
    
    while (n > 0) {
    let qoldiq = n % 10;
    sum = sum + (qoldiq ** len);
    n = parseInt(n / 10);
    }
    if (sum === son) {
        return true;
    }else {
        return false
    }
}

console.log(isArmstrong(153));
console.log(isArmstrong(1634));
console.log(isArmstrong(12));