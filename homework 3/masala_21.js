const student = {
    name: "Ali",
    scores: [78,90,85,95],
    get getAverage () {
        sum = 0;
        for (let i of this.scores) {
            sum += i;
            console.log(sum)
        }
        return (sum / this.scores.length).toFixed(2);
    }
};
console.log(student.getAverage);
