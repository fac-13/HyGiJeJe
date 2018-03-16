
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
        if (Object.keys(data).length == 0){
            var div = document.createElement("article"); 
            var paraError = document.createElement("p"); 
            var errorText = document.createTextNode("No results found."); 
            paraError.appendChild(errorText); 
            div.appendChild(paraError); 
            document.querySelector("#list").appendChild(div);
        }
        
        else {
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

                                        });

                });


                document.querySelector("#list").appendChild(wrapper);



            });

        }           
           

        })
    })

});



