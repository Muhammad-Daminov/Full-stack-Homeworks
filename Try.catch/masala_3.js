function deepReverse(arr){
    depReverse = [];
    for (let i of arr){
        if (Array.isArray(i)){
            depReverse.push(i.reverse());
        }else {
            depReverse.push(i)
        }
    }
    console.log(depReverse.reverse());
}

deepReverse([1, 2, [3, 4], 5]);