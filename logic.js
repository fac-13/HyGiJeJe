//queries APIs

function makeRequest (url, callback){
var xhr = new XMLHttpRequest(); 

xhr.addEventListener('load', function(){
    if (xhr.status === 200){
     var response = JSON.parce(xhr.responseText); 
     callback(response); 
    }
    else {
        console.log("Status code" + xhr.status); 
    }
})

xhr.open("GET", url); 
xhr.send();
}

//function narrative 