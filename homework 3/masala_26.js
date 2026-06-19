const movie = {
    ratings: [5, 4, 3, 5, 5, 4],
    
    getRating() {
        sum = 0;
        for (let i of this.ratings){
            sum += i;
        }
        return (sum / this.ratings.length).toFixed(1);
    }
}
console.log(movie.getRating());