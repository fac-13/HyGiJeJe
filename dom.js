

var moviesKey = config.movies_key; 
var button = document.querySelector("button"); 
var form = document.querySelector("form"); 
var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesKey + "&query=toy+story"; 

button.addEventListener('click', function(){
    apiRequests.makeRequest(url, function(response){
        apiRequests.movieDetails(response, function(data){
            console.log(data);
        })
    } )
   
});
