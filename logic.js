// var moviesKey = config.movies_key;


// //queries APIs
// var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesKey + "&query=toy+story";

// function makeRequest (url, callback){
// var xhr = new XMLHttpRequest();

// xhr.addEventListener('load', function(){
//     if (xhr.status === 200){
//      var response = JSON.parse(xhr.responseText);
//      callback(response);
//     }
//     else {
//         console.log("Status code" + xhr.status);
//     }
// })

// xhr.open("GET", url);
// xhr.send();
// }

//get movie details
function movieDetails (response){

    return response;

}

function getActorInfo(response) {
  var pagesObject =  response.query.pages;
  // return pagesObject[Object.keys(pagesObject)[0]];

  var result = {
    index: pagesObject[Object.keys(pagesObject)[0]].index,
    url: pagesObject[Object.keys(pagesObject)[0]].fullurl,
    image: pagesObject[Object.keys(pagesObject)[0]].thumbnail.source,
    extract: pagesObject[Object.keys(pagesObject)[0]].extract,
  }

  return result;


}

module.exports = {movieDetails: movieDetails,
  getActorInfo:getActorInfo
}







// //get actors names
// https://api.themoviedb.org/3/movie/19940/credits?api_key=9fb40ebd76d0b9d8c8904e47eb597820
