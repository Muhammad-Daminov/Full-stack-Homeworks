function filterHighScores (arr) {
    return arr.filter(score => score > 80)
}

console.log(filterHighScores([55, 85, 92, 74, 100]));