var apiRequests = {


  makeRequest: function (url, dataSelect, outputInDom) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var formattedData = dataSelect(response);  
        outputInDom(formattedData); // How does it wait until formattedData actually has data in it? 
      }
      else {
        console.log("Status code" + xhr.status);
      }
    })

    xhr.open("GET", url);
    xhr.send();
  },

  movieDetails: function (response) {

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
    })
    
  },

  getMovieActors: function (response, cb) {
    if (response.cast.length > 3) {
      response.cast.length = 3;
    }

    cb(response.cast.map(function (value) {
      return value.name;
    })
    )
  },

  getActorInfo: function (response) {
    var pagesObject = response.query.pages;

    var result = {
      index: pagesObject[Object.keys(pagesObject)[0]].index,
      url: pagesObject[Object.keys(pagesObject)[0]].fullurl,
      image: pagesObject[Object.keys(pagesObject)[0]].thumbnail.source,
      extract: pagesObject[Object.keys(pagesObject)[0]].extract,
    }

    return result;
  }

}



if (typeof module !== 'undefined') {
  module.exports = apiRequests;
}
