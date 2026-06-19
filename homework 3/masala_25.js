const course = {
    lessons: 45,
    completed: 18,
    
    getProgress(){
        return (this.lessons / 100) * 18 + "%";
    }
}
console.log(course.getProgress())