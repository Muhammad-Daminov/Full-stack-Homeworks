class Student {
    #grades = [];
    constructor(score) {
        this.#grades.push(score);
    };
    addGrade(score){
        this.#grades.push(score);
    };
    getAverage(){
        return this.#grades.reduce((acc, el) => acc+=el) / this.#grades.length;
    }
}
const student = new Student(100);
student.addGrade(50);
student.addGrade(100);
student.addGrade(90);
console.log(student.getAverage());