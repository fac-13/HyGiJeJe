var test = require("tape");
var logic = require("./logic");
var testDoubles = require("./testDoubles")


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
    var actual = typeof logic.movieDetails(testDoubles.movieTest)[0]; 
    var expected = 'object';
    t.deepEqual(actual, expected, "returns an array of objects");  
    t.end(); 
})

test("Should return an array of no more than 5", function(t){
    var actual = logic.movieDetails(testDoubles.movieTest).length; 
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


// test("should return an object", function(t){
//    var actual = logic.getActorInfo(testDoubles.wikiTest);
//   var expected = testDoubles.wikiTest;
//   t.deepEqual(actual, expected, "object should be same");
//   t.end();
// })

test("should target the required object", function(t){
   var actual = logic.getActorInfo(testDoubles.wikiTest);
  var expected = testDoubles.wikiTest.query.pages[149243]
  t.deepEqual(actual, expected, "should target the required object", expected);
  t.end();
})
