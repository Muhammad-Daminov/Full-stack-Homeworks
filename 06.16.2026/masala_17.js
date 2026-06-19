class Course {
    static totalCourses = 0;
    #students = [];

    constructor(courseName) {
        this.courseName = courseName;
        Course.totalCourses++;
    }

    enroll(studentName) {
        this.#students.push(studentName);
        console.log(`${studentName} kursga qoshildi.`);
    }

    getStudentsCount() {
        return this.#students.length;
    }
}
const Foundation = new Course("Full-Stack")
Foundation.enroll("Muhammad")
console.log(Foundation.getStudentsCount())