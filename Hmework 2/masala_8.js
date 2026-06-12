const sortObjectKeys = (obj) => {
    let keys = Object.keys(obj);
    let sortkeys = keys.sort();
    return sortkeys;
}

const product = {
    banana: 4,
    apple: 2,
    cherry: 3
};

console.log(sortObjectKeys(product))
