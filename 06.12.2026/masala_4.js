class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(name, age, subject, experience) {
        super(name, age);
        this.subject = subject;
        this.experience = experience;
    }

    getRank() {
        if (this.experience > 5) {
            return "Senior Teacher";
        }
        return "Regular Teacher";
    }
}

const teacher = new Teacher("Ali", 35, "Mathematics", 8);
console.log(teacher.getRank());