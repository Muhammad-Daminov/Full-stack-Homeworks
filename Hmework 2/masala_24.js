const sumKeyLengths = (obj) => {
    let totalLen = 0;

    for (let key in obj) {
        totalLen += key.length;
    }

    return totalLen;
};

const Obj = { ab: 1, abc: 2, a: 3 };
console.log(sumKeyLengths(Obj));