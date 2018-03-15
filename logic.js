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


module.exports = {movieDetails: movieDetails};





// //get actors names 
// https://api.themoviedb.org/3/movie/19940/credits?api_key=9fb40ebd76d0b9d8c8904e47eb597820