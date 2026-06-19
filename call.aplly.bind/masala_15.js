const student = {
    math: 89,
    english: 87,
    physics: 83,
    
    get average(){
        sum = this.math + this.english + this.physics
        return (sum / 3).toFixed(1);
    }
}
console.log(student.average);