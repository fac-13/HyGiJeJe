var test = require("tape");
var logic = require("./logic");
var testDoubles = require("./testDoubles")


// MOVIEDETAILS TESTS

test("function returns an array", function (t) {
  var actual = logic.movieDetails([]);
  if (Array.isArray(actual)) {
    t.pass();
  }
  else {
    t.fail("It is not an array")
  }
  t.end();
})

test("Should return an array of objects", function (t) {
  var actual = typeof logic.movieDetails(testDoubles.movieTest)[0];
  var expected = 'object';
  t.deepEqual(actual, expected, "returns an array of objects");
  t.end();
})

test("Should return an array of no more than 4", function (t) {
  var actual = logic.movieDetails(testDoubles.movieTest).length;
  var expected = 4;
  t.deepEqual(actual, expected, "returns an array of no more than 4 entires");
  t.end();
})

test("Should return an array of a maximum of 4", function (t) {
  var actual = logic.movieDetails([{}, {}]).length;
  var expected = 2;
  t.deepEqual(actual, expected, "returns an array of a maximum of 4 entires");
  t.end();
})


//WIKIPEDIA TESTS

test("should target the first pages object", function (t) {
  var returnedActual = logic.getActorInfo(testDoubles.wikiTest);
  var actual = returnedActual.index;
  var expected = testDoubles.wikiTest.query.pages[149243].index;
  t.deepEqual(actual, expected, "should target the required object", expected);
  t.end();
})


test("should return an object with a url property", function (t) {
  var actual = logic.getActorInfo(testDoubles.wikiTest);
  if (actual.hasOwnProperty('url')) {
    t.pass();
  } else {
    t.fail('does not have a url property');
  }
  t.end();
});

test("The url property should have the correct url", function (t) {
  var returnedActual = logic.getActorInfo(testDoubles.wikiTest);
  var actual = returnedActual.url;
  var expected = testDoubles.wikiTest.query.pages[149243].fullurl
  t.deepEqual(actual, expected, "the url's should be the same" + expected);
  t.end();
});


test("The image property should have the correct image url", function (t) {
  var returnedActual = logic.getActorInfo(testDoubles.wikiTest);
  var actual = returnedActual.image;
  var expected = testDoubles.wikiTest.query.pages[149243].thumbnail.source;
  t.deepEqual(actual, expected, "the image url's should be the same" + expected);
  t.end();
});

test("The extract property should have the correct extract", function (t) {
  var returnedActual = logic.getActorInfo(testDoubles.wikiTest);
  var actual = returnedActual.extract;
  var expected = testDoubles.wikiTest.query.pages[149243].extract;
  t.deepEqual(actual, expected, "the extracts should be the same" + expected);
  t.end();
});

// ACTOR DETAILS TESTS
test("function returns an array", function (t) {
  var actual = logic.getMovieActors(testDoubles.actorTest);
  if (Array.isArray(actual)) {
    t.pass();
  }
  else {
    t.fail("It is not an array")
  }
  t.end();
})

test("Should return an array of no more than 3", function (t) {
  var actualReturned = logic.getMovieActors(testDoubles.actorTest);
  var actual = actualReturned.length;
  var expected = 3;
  t.deepEqual(actual, expected, "returns an array of no more than 3 entires, actual: " + actual);
  t.end();
})

test("Should return an array of strings", function (t) {
  var actualReturned = logic.getMovieActors(testDoubles.actorTest);
  var actual = actualReturned;

  for (var i = 0; i < actual.length; i++) {
    if (typeof actual[i] != 'string') t.fail("The array is not made of strings");
  }
  t.pass();
  t.end();
})
