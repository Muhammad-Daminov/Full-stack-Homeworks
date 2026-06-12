const longestObject = (obj) => {
    let uzn = "";

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            if (obj[key].length > uzn.length) {
                uzn = obj[key];
            }
        }
    }

    return uzn;
};

const information = {
    ism: "Ali",
    familiya: "Abdukarimov",
    shahar: "Toshkent"
};

console.log(longestObject(information));