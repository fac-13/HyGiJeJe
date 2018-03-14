var test = require("tape"); 
var logic = require("./logic"); 


test("function returns an array", function(t){
    var actual = logic.movieDetails([]); 
      if (Array.isArray(actual)){
        t.pass();
    }
    else {
        t.fail("It is not an array")
    }
    t.end(); 
})

