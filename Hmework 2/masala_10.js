const sumNumber = (obj) => {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum = sum + obj[key];
        }
    }

    return sum;
};

const informations = {
    ism: "Ali",
    yosh: 22,
    kurs: 3,
    manzil: "Toshkent",
    stipendiya: 500000
};

console.log(sumNumber(informations));