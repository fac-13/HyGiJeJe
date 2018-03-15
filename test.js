var test = require("tape"); 
var logic = require("./logic"); 

// MOVIEDETAILS TESTS

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

test("Should return an array of objects", function(t){
    var actual = logic.movieDetails([{1: "test1", 2: "test2"},{3: "test3", 4:"test4"}]); 
    var expected = [{1: "test1", 2: "test2"},{3: "test3", 4:"test4"}];
    t.deepEqual(actual, expected, "returns an array of objects");  
    t.end(); 
})

test("Should return an array of no more than 5", function(t){
    var actual = logic.movieDetails([{}, {}, {}, {}, {}, {}]).length; 
    var expected = 5;
    t.deepEqual(actual, expected, "returns an array of no more than 5 entires");  
    t.end(); 
})

test("Should return an array of a maximum of 5", function(t){
    var actual = logic.movieDetails([{}, {}]).length; 
    var expected = 2;
    t.deepEqual(actual, expected, "returns an array of a maximum of 5 entires");  
    t.end(); 
})



//WIKIPEDIA TESTS


