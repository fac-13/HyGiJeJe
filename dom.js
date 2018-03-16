
// Populate movies query list in html:

var moviesKey = config.movies_key;
var button = document.querySelector("button");
var form = document.querySelector("form");

var movieIds = [];

button.addEventListener('click', function (event) {
    event.preventDefault();
    //removing list items
    var wrapper = document.querySelector("#list");
    movieIds = [];

    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }

    //creating URL
    var text = document.querySelector("input").value;
    var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesKey + "&query=" + text;

    //Calls the movieDatabase and gets 4 movies that match the text the user typed
    apiRequests.makeRequest(url, apiRequests.getMovieDetails, displayMovies);

})

// Display the movies on the screen 
function displayMovies(movies) {

    if (Object.keys(movies).length == 0) {
        var div = document.createElement("article");
        var paraError = document.createElement("p");
        var errorText = document.createTextNode("No results found 😟");
        paraError.appendChild(errorText);
        div.appendChild(paraError);
        document.querySelector("#list").appendChild(div);
    } else {

        movies.forEach(function (movie) {

            movieIds.push(movie.id);

            var wrapper = document.createElement("article");
            wrapper.classList.add("list_item");

            var image = document.createElement("img");
            image.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + movie.poster_path);
            image.classList.add('list_image');
            wrapper.appendChild(image);

            var paraTitle = document.createElement("p");
            paraTitle.classList.add("list_title");
            var title = document.createTextNode(movie.title);
            paraTitle.appendChild(title);
            wrapper.appendChild(paraTitle);

            var paraContent = document.createElement("p");
            paraContent.classList.add("list_content");
            var content = document.createTextNode(movie.overview);
            paraContent.appendChild(content);
            wrapper.appendChild(paraContent);

            document.querySelector("#list").appendChild(wrapper);

        });

        apiRequests.buildActorUrl(movieIds);
    }

}

// Display the information from wikipedia
function displayActor(actor) {
    var div = document.createElement('div');
    div.classList.add('list_profile');

    var link = document.createElement('a');
    link.setAttribute('href', actor.url);

    var img = document.createElement('img');
    img.setAttribute('src', actor.image);
    link.appendChild(img);

    var para = document.createElement('p');
    var extract = document.createTextNode(actor.extract);
    para.appendChild(extract);

    div.appendChild(link);
    div.appendChild(para);

    var list = document.getElementsByClassName('list_item');

    for (var i = 0; i < list.length; i++) {
        if (list[i].childNodes.length <= 6) {
            list[i].appendChild(div);
            break;
        }
    }

}




