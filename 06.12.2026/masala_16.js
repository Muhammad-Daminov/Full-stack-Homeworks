class Movie {
    constructor(title, durationPerEpisode) {
        this.title = title;
        this.durationPerEpisode = durationPerEpisode;
    }
}

class Series extends Movie {
    constructor(title, durationPerEpisode, episodes) {
        super(title, durationPerEpisode);
        this.episodes = episodes;
    }

    getTotalDuration = function() {
        return this.episodes * this.durationPerEpisode + " minut";
    };
}

const show = new Series("Sherlock", 90, 12);
console.log(show.getTotalDuration());