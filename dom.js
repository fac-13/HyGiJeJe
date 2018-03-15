
// Populate movies query list in html:

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

var test = [
    {title: "Toy Story", poster_path: "/rhIRbceoE9lR4veEXuwCC2wARtG.jpg", overview: "Led by Woody, Andy's toys live happily in his room…eventually learns to put aside their differences.", release_date: "1995-10-30"}, {title: "Toy Story 3", poster_path: "/AqYmOBxLjASrj5UtybIh7Axyv77.jpg", overview: "Woody, Buzz, and the rest of Andy's toys haven't b… band together to escape and return home to Andy.", release_date: "2010-06-16"}, {title: "Toy Story 2", poster_path: "/3CmK3XurcLeUyMifCR28ibzupbB.jpg", overview: "Andy heads off to Cowboy Camp, leaving his toys to…as to decide where he and his heart truly belong.", release_date: "1999-10-30"}, {title: "Toy Story That Time Forgot", poster_path: "/bxLjTD2FutUHjIIULCW7DU8rVoH.jpg", overview: "During a post-Christmas play date, the gang find t…Bonnie's room in this Toy Story That Time Forgot.", release_date: "2014-12-02"}, {title: "Hawaiian Vacation", poster_path: "/c0K2qAo0UlFMEqrVNgu0Ls9EYdx.jpg", overview: "The toys throw Ken and Barbie a Hawaiian vacation in Bonnie's room.", release_date: "2011-06-16"}
]

var moviesSection = document.getElementById('#movies-output');

if (test) {

    test.forEach(function(item) {
        var wrapper = document.createElement('article');
        var element = `<h1>${item.title}</h1><img src="${item.poster_path}"><p>${item.overview}</p><p>${item.release_date}</p>`;
        wrapper.innerHTML = element;
        console.log(wrapper);
    });
    
}
