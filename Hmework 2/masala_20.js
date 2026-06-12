const combineStrings = (obj) => {
    let result = "";

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            result += obj[key];
        }
    }

    return result;
};

const data = { ism: "Ali", yosh: 22, familiya: "Valiyev" };
console.log(combineStrings(data));