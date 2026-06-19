const something = {
    a: 12,
    b: 23,
    d: 43
}

Object.defineProperty(something, "b", {
    configurable: false
});

const writableProperties  = Object.keys(something).filter(key => {
    return Object.getOwnPropertyDescriptor(something, key).configurable === true;
})
console.log(writableProperties );