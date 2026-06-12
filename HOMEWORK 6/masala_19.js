function sumNestedArray(arr) {
    return arr.flat().reduce((acc, curr) => acc + curr, 0);
}

console.log(sumNestedArray([[1, 2], [3, 4], [5]])); 
