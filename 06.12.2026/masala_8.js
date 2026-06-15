class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

class ProgrammingCourse extends Course {
    constructor(title, price, language, studentsCount) {
        super(title, price);
        this.language = language;
        this.studentsCount = studentsCount;
    }

    getPopularity = () => this.studentsCount > 1000 ? "Very Popular" : "Normal";
}

const JS = new ProgrammingCourse("Frontend", 500, "JavaScript", 1500);
console.log(JS.getPopularity());