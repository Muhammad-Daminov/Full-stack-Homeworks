const something = {
    a: 12,
    b: 23,
    d: 43
}

Object.defineProperty(something, "b", {
    writable: false
});

const writableProperties  = Object.keys(something).filter(key => {
    return Object.getOwnPropertyDescriptor(something, key).writable === true;
})
console.log(writableProperties );