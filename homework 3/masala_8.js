const UniqueDigits = (num) => {
    const str = String(num);
    const digitSet = new Set(str);

    return str.length === digitSet.size;
}
console.log(UniqueDigits(12345));
console.log(UniqueDigits(12341 ));

