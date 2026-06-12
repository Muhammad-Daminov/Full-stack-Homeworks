const compareObjectSize = (obj1, obj2) => {
    let size1 = Object.keys(obj1).length;
    let size2 = Object.keys(obj2).length;

    if (size1 > size2) {
        return "Birinchi obyektda ko'p";
    } else if (size2 > size1) {
        return "Ikkinchi obyektda ko'p";
    } else {
        return "Teng";
    }
};

const poliz = { Tarvuz: 15, Qovun: 12 };
const mevalar = { olma: 3, banan: 5, gilos: 8 };

console.log(compareObjectSize(poliz, mevalar));