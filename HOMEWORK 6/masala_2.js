 const sort = (arr) => {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sort(["Salomlar", "Hello", "World", "Eshmat", "Toshmat"]));