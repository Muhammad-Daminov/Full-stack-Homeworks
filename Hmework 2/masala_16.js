const topStudent = (obj) => {
    let maxBall = 0;
    let top = "";

    for (let key in obj) {
        if (obj[key] > maxBall) {
            maxBall = obj[key];
            top = key;
        }
    }

    return top;
};

const guruh = { ali: 78, vali: 95, sami: 88 };
console.log(topStudent(guruh));