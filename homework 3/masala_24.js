const team = {
    wins: 10,
    draws: 4,
    losses: 2,
    
    getPoints() {
        sum = 0;
        sum += this.wins * 3
        sum += this.draws 
        return sum
    }
}
console.log(team.getPoints());
