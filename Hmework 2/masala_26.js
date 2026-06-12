const commonKeys = (obj1, obj2) => {
    let result = [];

    for (let key in obj1) {
        if (key in obj2) {
            result.push(key);
        }
    }

    return result;
};

const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 5, c: 6, d: 7 };
console.log(commonKeys(o1, o2));