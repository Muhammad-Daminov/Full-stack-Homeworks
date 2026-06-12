const mostFrequentValue = (obj) => {
    let counts = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let key in obj) {
        let value = obj[key];
        
        if (counts[value] === undefined) {
            counts[value] = 1;
        } else {
            counts[value]++;
        }

        if (counts[value] > maxCount) {
            maxCount = counts[value];
            mostFrequent = value;
        }
    }

    return mostFrequent;
};

const misol = { a: 5, b: 7, c: 5, d: 9, e: 5 };
console.log(mostFrequentValue(misol));