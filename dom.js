
// Populate movies query list in html:

var moviesKey = config.movies_key;
var button = document.querySelector("button");
var form = document.querySelector("form");

button.addEventListener('click', function (event) {
    event.preventDefault();
    //removing list items
    var wrapper = document.querySelector("#list");

    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }

    //creating URL
    var text = document.querySelector("input").value;
    var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesKey + "&query=" + text;

    //API request for movie details
    apiRequests.makeRequest(url, function (response) {
        apiRequests.movieDetails(response, function (data) {
            
            // var moviesSection = document.getElementById('#movies-output');

            data.forEach(function (item) {
                var wrapper = document.createElement("article");
                wrapper.classList.add("list_item");

                var image = document.createElement("img");
                image.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + item.poster_path);
                image.classList.add('list_image');
                wrapper.appendChild(image);

                var paraTitle = document.createElement("p");
                paraTitle.classList.add("list_title");
                var title = document.createTextNode(item.title);
                paraTitle.appendChild(title);
                wrapper.appendChild(paraTitle);

                var paraContent = document.createElement("p");
                paraContent.classList.add("list_content");
                var content = document.createTextNode(item.overview);
                paraContent.appendChild(content);
                wrapper.appendChild(paraContent);

                var id = item.id;
                var url2 = "https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=" + moviesKey;
                apiRequests.makeRequest(url2, function(info) {
                    apiRequests.getMovieActors(info, function(actors){
                        var actors = actors.toString().replace(/\,/g, ", "); 

                        var paraActors = document.createElement('p');
                        var actorsNames = document.createTextNode(actors);
                        paraActors.appendChild(actorsNames);

                        wrapper.appendChild(paraActors);

                        console.log(actors);
                    });

                });


                document.querySelector("#list").appendChild(wrapper);



            });


            
           

        })
    })

});

// var test = [
//     {title: "Toy Story", poster_path: "/rhIRbceoE9lR4veEXuwCC2wARtG.jpg", overview: "Led by Woody, Andy's toys live happily in his room…eventually learns to put aside their differences.", release_date: "1995-10-30"}, {title: "Toy Story 3", poster_path: "/AqYmOBxLjASrj5UtybIh7Axyv77.jpg", overview: "Woody, Buzz, and the rest of Andy's toys haven't b… band together to escape and return home to Andy.", release_date: "2010-06-16"}, {title: "Toy Story 2", poster_path: "/3CmK3XurcLeUyMifCR28ibzupbB.jpg", overview: "Andy heads off to Cowboy Camp, leaving his toys to…as to decide where he and his heart truly belong.", release_date: "1999-10-30"}, {title: "Toy Story That Time Forgot", poster_path: "/bxLjTD2FutUHjIIULCW7DU8rVoH.jpg", overview: "During a post-Christmas play date, the gang find t…Bonnie's room in this Toy Story That Time Forgot.", release_date: "2014-12-02"}, {title: "Hawaiian Vacation", poster_path: "/c0K2qAo0UlFMEqrVNgu0Ls9EYdx.jpg", overview: "The toys throw Ken and Barbie a Hawaiian vacation in Bonnie's room.", release_date: "2011-06-16"}
// ]


