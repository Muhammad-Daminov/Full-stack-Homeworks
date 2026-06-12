function sumObject(obj){
    sum = 0;
    
    for (let i in obj){
        sum += obj[i];
    }
    return sum;
}

let obj = {
    internet: 30000,
    svet: 70000,
    gaz: 90000,
    suv: 10000
}
console.log(sumObject(obj))