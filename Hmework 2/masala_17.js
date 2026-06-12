const Takrorlanish = (obj) => {
    let lst = [];

    for (let key in obj) {
        if (lst.includes(obj[key])) {
            return true;
        }
        lst.push(obj[key]);
    }

    return false;
};

const information = { a: 10, b: 20, c: 10 };
console.log(Takrorlanish(information));