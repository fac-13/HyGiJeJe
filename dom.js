var logic = logic; 


var button = document.querySelector("button"); 
var form = document.querySelector("form"); 


button.addEventListener("click", buttonClicked); 


function buttonClicked(){

    console.log("preventing default"); 

    var moviesKey = config.movies_key; 

    var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesKey + "&query=toy+story"; 
   
   var something = apiRequests.makeRequest(url, apiRequests.movieDetails); 
   })

console.log(something); 
}; 



// function movieSearch(){
//     var moviesKey = config.movies_key; 

//     var url = "https://api.themoviedb.org/3/search/movie?api_key=" + moviesKey + "&query=toy+story"; 
  
//      var result = logic.makeRequest(url, logic.movieDetails);
  
//     console.log(result);
// }
  

  
// //  console.log(result);  
  

