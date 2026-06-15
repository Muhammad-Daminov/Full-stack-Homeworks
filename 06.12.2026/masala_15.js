class Person {
    constructor(name) {
        this.name = name;
    }
    showData() {
        return `Name: ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, faculty) {
        super(name);
        this.faculty = faculty;
    }
    showData() {
        return `${super.showData()}, Faculty: ${this.faculty}`;
    }
}

class GraduateStudent extends Student {
    constructor(name, faculty, researchTopic) {
        super(name, faculty);
        this.researchTopic = researchTopic;
    }
    showData() {
        return `${super.showData()}, Research: ${this.researchTopic}`;
    }
}

const grad = new GraduateStudent("Vali", "IT", "AI Systems");
console.log(grad.showData());