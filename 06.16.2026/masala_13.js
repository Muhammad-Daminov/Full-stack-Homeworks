class Player {
    #score = 0;

    constructor(username) {
        this.username = username;
    }

    addScore(points) {
        this.#score += points;
        console.log(`${points} ball qoshildi`);
    }

    resetScore() {
        this.#score = 0;
        console.log(`${this.username} qayta tiklandi.`);
    }

    getScore() {
        return this.#score;
    }

    static leaderboard(players) {
        
    }
}
const user = new Player("user")
user.addScore(90)
console.log(user.getScore())