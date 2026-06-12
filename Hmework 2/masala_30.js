const topStudentsList = (obj) => {
    let maxBall = 0;
    let topstudent = [];

    for (let key in obj) {
        if (obj[key] > maxBall) {
            maxBall = obj[key];
        }
    }

    for (let key in obj) {
        if (obj[key] === maxBall) {
            topstudent.push(key);
        }
    }

    return topstudent;
};

const guruh2 = { ali: 85, vali: 91, sami: 77, nodir: 91 };
console.log(topStudentsList(guruh2));