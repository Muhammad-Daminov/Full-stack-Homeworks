const isAscending = (digit) => {
    let str = String(digit);

    for (let i= 1; i < str.length; i++) {
        if (str[i] < str[i - 1] ){
            return false;
        }
    }
    return true
}

let digit1 = 123489;
let digit2 = 987654;

console.log(isAscending(digit1));
console.log(isAscending(digit2));