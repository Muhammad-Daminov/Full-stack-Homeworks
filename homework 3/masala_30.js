const exam = {
    correct: 37,
    total: 50,
    
    getPercentage() {
        return (this.total / 100) * this.correct 
    }
}
console.log(exam.getPercentage());