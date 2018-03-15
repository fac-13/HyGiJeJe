var apiRequests = {


  makeRequest: function (url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
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

  movieDetails: function (response) {

    // cuts input array length to maximum of 5 items
    if (response.length > 5) {
      response.length = 5;
    }

    let result = response.map(function (item) {
      let innerObject = {};
      innerObject.title = item.title;
      innerObject.poster_path = item.poster_path;
      innerObject.overview = item.overview;
      innerObject.release_date = item.release_date;
      return innerObject;
    })

    return result;

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



module.exports = apiRequests;