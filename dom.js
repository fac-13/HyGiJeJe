var logic = require("./logic"); 


var x = logic.movieDetails();

console.log(x);


var moviesKey = config.movies_key; 

var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesKey + "&query=toy+story"; 
console.log(url); 