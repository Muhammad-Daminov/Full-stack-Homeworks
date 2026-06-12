function totalStringLength(arr) {
    return arr.reduce((acc, curr) => acc + curr.length, 0);
}

console.log(totalStringLength(["salom", "hello", "world"])); 

