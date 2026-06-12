function countPositiveNumbers(arr) {
    return arr.filter(num => num > 0).length;
}

console.log(countPositiveNumbers([-5, 3, -1, 8, -2, 11])); 