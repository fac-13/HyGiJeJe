var apiRequests = {


  makeRequest: function (url, structure, render) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var data = structure(response);
        render(data);
      }

      else {
        document.querySelector("#list").textContent = "Sorry! We can't get your results right now 😟"; 
        console.log("Status code" + xhr.status);
      }
    })

    xhr.open("GET", url);
    xhr.send();
  },


  getMovieDetails: function (response) {

    // cuts input array length to maximum of 5 items
    var result = response.results;
    if (result.length > 4) {
      result.length = 4;
    }

    return result.map(function (item) {
      let innerObject = {};
      innerObject.id = item.id;
      innerObject.title = item.title;
      innerObject.poster_path = item.poster_path;
      innerObject.overview = item.overview;
      innerObject.release_date = item.release_date; 
      return innerObject;
    });
    
  },


  getMovieActors: function (response) {
    if (response.cast.length > 4) {
      response.cast.length = 4;
    }

    return response.cast.map(function (value) {
      return value.name;
    })
    
  },


  getActorInfo: function (response) {
    var pagesObject = response.query.pages;

    var firstObject = '';
    for(var obj in pagesObject) {
      if(pagesObject[obj]['index'] === 1) {
        firstObject = obj;
      }
    }

    var result = {
      index: pagesObject[firstObject].index,
      url: pagesObject[firstObject].fullurl,
      image: pagesObject[firstObject].thumbnail.source,
      extract: pagesObject[firstObject].extract,
    }

    return result;
  },


  buildActorUrl: function (ids) {
    ids.map(function (id) {
      var url2 = "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=" + moviesKey;
      apiRequests.makeRequest(url2, apiRequests.getMovieActors, apiRequests.buildWikiUrl);
    });
  },


  buildWikiUrl: function (names) {
    names.forEach(function (name) {
      name.replace(" ", "+");
      var url3 = "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts%7Cinfo%7Cpageimages&list=&generator=search&exsentences=1&exintro=1&explaintext=1&inprop=url&gsrsearch="+name+"&origin=*"
      apiRequests.makeRequest(url3, apiRequests.getActorInfo, displayActor);
    })

  }


}



if (typeof module !== 'undefined') {
  module.exports = apiRequests;
}
