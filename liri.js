require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv(2);

var searchInput = process.argv(3);

function command(){
    if (command === "concert-this"){

    } else if (command === "spotify-this-song") {

    } else if (command === "movie-this"){

    } else if (command === "do-what-it-says"){

    } else {
        console.log("Invalid Entry!!!")
    }
}