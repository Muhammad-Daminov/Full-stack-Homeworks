const swapDigits = (num) => {
    let str = String(num);
    

    if (str.length < 2) {
        return num;
    }

    let first = str[0];
    let last = str[str.length -1];
    let middle = str.slice(1, str.length - 1);


    return Number(last + middle + first);

};

console.log(swapDigits('52341'))