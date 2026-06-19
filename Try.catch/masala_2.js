const arr = [1, 2, 2, 3, 1, 4];

function firstUnique(arr) {
    const numbers = new Map();
    arr.forEach(el => {
        if (numbers.has(el)){
            numbers.set(el, numbers.get(el)+1);
        }else {
            numbers.set(el, 1);
        }
    });
    for (const [key, value] of numbers){
        if (value === 1){
            return key;
        }
    }
    return null;
}
console.log(firstUnique(arr));