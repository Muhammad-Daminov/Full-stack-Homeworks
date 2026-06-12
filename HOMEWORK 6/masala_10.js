function findAverage(arr) {
    let sum = arr.reduce((acc, item) => acc + item, 0);
    return sum / arr.length
}

console.log(findAverage([2, 3, 4, 5, 6, 7, 8, 9])); 
