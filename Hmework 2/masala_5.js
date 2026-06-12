const largeObject = (obj) => {
    maxobj = 0;
    
    for ( i in obj) {
        if (obj[i] > maxobj) {
            maxobj = obj[i];
        }
    }
    
    return maxobj;
}

dct = {
    apple: 15000,
    banana: 20000,
    strawberry: 40000
};

console.log(largeObject(dct))