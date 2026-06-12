function findUniqueElements(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
}

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5])); 
