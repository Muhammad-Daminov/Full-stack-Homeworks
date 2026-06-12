const findMinMaxProducts = (obj) => {
    let maxPrice = -Infinity;
    let minPrice = Infinity;
    let expensive = "";
    let cheapest = "";

    for (let key in obj) {
        if (obj[key] > maxPrice) {
            maxPrice = obj[key];
            expensive = key;
        }
        if (obj[key] < minPrice) {
            minPrice = obj[key];
            cheapest = key;
        }
    }

    return { Engqimmat: expensive, Engarzon: cheapest };
};

const dorixona = { parsetamol: 3000, aspirin: 2000, vitaminC: 15000, amoksilin: 39000};
console.log(findMinMaxProducts(dorixona));