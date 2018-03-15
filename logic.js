var apiRequests = {

    
makeRequest: function (url, callback){
    var xhr = new XMLHttpRequest(); 
    
    xhr.addEventListener('load', function(){
        if (xhr.status === 200){
         var response = JSON.parse(xhr.responseText); 
            callback(response); 
        }

        else {
            console.log("Status code" + xhr.status); 
        }
    })
    
    xhr.open("GET", url); 
    xhr.send();
    },

  movieDetails: function(response){

    // cuts input array length to maximum of 5 items
    var result = response.results; 

    if(result.length > 5) {
        result.length = 5;
    }

    var x =  result.map(function(item) {
        let innerObject = {};
        innerObject.title = item.title;
        innerObject.poster_path = item.poster_path;
        innerObject.overview = item.overview;
        innerObject.release_date = item.release_date;
        return innerObject;
    }) 
    return x; 
}

}

// module.exports = apiRequests;





// //get actors names 
// https://api.themoviedb.org/3/movie/19940/credits?api_key=9fb40ebd76d0b9d8c8904e47eb597820