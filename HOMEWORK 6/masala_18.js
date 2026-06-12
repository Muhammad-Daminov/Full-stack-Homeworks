function mostFrequent(arr) {
    let counts = {};
    let maxElement = arr[0];
    let maxCount = 0;

    for (let item of arr) {
        counts[item] = (counts[item] || 0) + 1;
        if (counts[item] > maxCount) {
            maxCount = counts[item];
            maxElement = item;
        }
    }
    return maxElement;
}

console.log(mostFrequent(["olma", "banan", "olma", "apelsin", "olma"])); 
