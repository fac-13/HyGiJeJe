var test = require("tape"); 
var logic = require("./logic"); 

// MOVIEDETAILS TESTS

// dummy response:

const movieResponse = [
    {
    vote_count: 6804,
    id: 862,
    video: false,
    vote_average: 7.8,
    title: "Toy Story",
    popularity: 38.043839,
    poster_path: "/rhIRbceoE9lR4veEXuwCC2wARtG.jpg",
    original_language: "en",
    original_title: "Toy Story",
    genre_ids: [
    16,
    35,
    10751
    ],
    backdrop_path: "/dji4Fm0gCDVb9DQQMRvAI8YNnTz.jpg",
    adult: false,
    overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    release_date: "1995-10-30"
    },
    {
    vote_count: 5758,
    id: 10193,
    video: false,
    vote_average: 7.6,
    title: "Toy Story 3",
    popularity: 31.525238,
    poster_path: "/AqYmOBxLjASrj5UtybIh7Axyv77.jpg",
    original_language: "en",
    original_title: "Toy Story 3",
    genre_ids: [
    16,
    10751,
    35
    ],
    backdrop_path: "/y2qAjM37QgatWeG84DDtwsZuMW.jpg",
    adult: false,
    overview: "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    release_date: "2010-06-16"
    },
    {
    vote_count: 4972,
    id: 863,
    video: false,
    vote_average: 7.4,
    title: "Toy Story 2",
    popularity: 30.818806,
    poster_path: "/3CmK3XurcLeUyMifCR28ibzupbB.jpg",
    original_language: "en",
    original_title: "Toy Story 2",
    genre_ids: [
    16,
    35,
    10751
    ],
    backdrop_path: "/9Kjxr4VCU0Y4DAuXkzR2moAy7DK.jpg",
    adult: false,
    overview: "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    release_date: "1999-10-30"
    },
    {
    vote_count: 303,
    id: 256835,
    video: false,
    vote_average: 6.8,
    title: "Toy Story That Time Forgot",
    popularity: 8.595999,
    poster_path: "/bxLjTD2FutUHjIIULCW7DU8rVoH.jpg",
    original_language: "en",
    original_title: "Toy Story That Time Forgot",
    genre_ids: [
    16,
    10751
    ],
    backdrop_path: "/lBIU50ihAcSJtxrayTv1CmyP7r0.jpg",
    adult: false,
    overview: "During a post-Christmas play date, the gang find themselves in uncharted territory when the coolest set of action figures ever turn out to be dangerously delusional. It's all up to Trixie, the triceratops, if the gang hopes to return to Bonnie's room in this Toy Story That Time Forgot.",
    release_date: "2014-12-02"
    },
    {
    vote_count: 194,
    id: 77887,
    video: false,
    vote_average: 6.8,
    title: "Hawaiian Vacation",
    popularity: 7.711909,
    poster_path: "/c0K2qAo0UlFMEqrVNgu0Ls9EYdx.jpg",
    original_language: "en",
    original_title: "Hawaiian Vacation",
    genre_ids: [
    16,
    10751
    ],
    backdrop_path: "/kqeqmUWMb0gG2QsGSBgWHvvzR5B.jpg",
    adult: false,
    overview: "The toys throw Ken and Barbie a Hawaiian vacation in Bonnie's room.",
    release_date: "2011-06-16"
    },
    {
    vote_count: 116,
    id: 130925,
    video: false,
    vote_average: 7.2,
    title: "Partysaurus Rex",
    popularity: 6.844063,
    poster_path: "/p6KuSDQnLIXn8tqZRMkcF137Wjk.jpg",
    original_language: "en",
    original_title: "Partysaurus Rex",
    genre_ids: [
    16,
    35,
    10751,
    14
    ],
    backdrop_path: "/l9zwAZgWFdQWDqylNuYcpsMIy1Z.jpg",
    adult: false,
    overview: "When Rex finds himself left behind in the bathroom, he puts his limbs to use by getting a bath going for a bunch of new toy friends.",
    release_date: "2012-09-14"
    },
    {
    vote_count: 156,
    id: 82424,
    video: false,
    vote_average: 6.7,
    title: "Small Fry",
    popularity: 6.927601,
    poster_path: "/4deuIpnrXuzMAggQk19Jk81CST.jpg",
    original_language: "en",
    original_title: "Small Fry",
    genre_ids: [
    16,
    10751
    ],
    backdrop_path: "/21Cq3jQvaf2u8Q33L4ou8dMmtvi.jpg",
    adult: false,
    overview: "A fast food restaurant mini variant of Buzz forcibly switches places with the real Buzz and his friends have to deal with the obnoxious impostor.",
    release_date: "2011-11-23"
    },
    {
    vote_count: 0,
    id: 301528,
    video: false,
    vote_average: 0,
    title: "Toy Story 4",
    popularity: 2.729059,
    poster_path: "/llVwi8DDyCNIsMuf6G6Vc331PUP.jpg",
    original_language: "en",
    original_title: "Toy Story 4",
    genre_ids: [
    12,
    16,
    35,
    10751
    ],
    backdrop_path: "/igtgG9HE0rYPJ1hZI2rucT8io8g.jpg",
    adult: false,
    overview: "Woody and Buzz Lightyear set out on an epic journey to find Woody's romantic interest, Bo Peep.",
    release_date: "2019-06-20"
    },
    {
    vote_count: 3,
    id: 210296,
    video: false,
    vote_average: 2.8,
    title: "Charlie: A Toy Story",
    popularity: 1.535279,
    poster_path: "/pNwY2CctdBb464VKKslOe7c0A1R.jpg",
    original_language: "en",
    original_title: "Charlie: A Toy Story",
    genre_ids: [ ],
    backdrop_path: null,
    adult: false,
    overview: "Get ready for a hilarious fun-filled adventure as 10 year old Caden and his best friend, Charlie, a golden retriever, set out on a wild escapade around town thwarting the evil plans of the bumbling town bullies who are out to break into Caden's Dad's toy shop to steal his new one-of-a-kind toy invention that could literally change the world.",
    release_date: "2013-04-02"
    },
    {
    vote_count: 303,
    id: 213121,
    video: false,
    vote_average: 7.2,
    title: "Toy Story of Terror!",
    popularity: 1.328268,
    poster_path: "/cT8krQxRoioNk2KabSYuIf2yuaC.jpg",
    original_language: "en",
    original_title: "Toy Story of Terror!",
    genre_ids: [
    12,
    16,
    35,
    10751,
    14,
    27
    ],
    backdrop_path: "/fFYzHx4tN6cSVgWcFcfJI42KOpN.jpg",
    adult: false,
    overview: "What starts out as a fun road trip for the Toy Story gang takes an unexpected turn for the worse when the trip detours to a roadside motel. After one of the toys goes missing, the others find themselves caught up in a mysterious sequence of events that must be solved before they all suffer the same fate in this Toy Story of Terror.",
    release_date: "2013-10-16"
    },
    {
    vote_count: 0,
    id: 175939,
    video: false,
    vote_average: 0,
    title: "Live Action Toy Story",
    popularity: 1.05291,
    poster_path: "/bmdDNARkSGiT5u3hZYS8lEMpvWi.jpg",
    original_language: "en",
    original_title: "Live Action Toy Story",
    genre_ids: [ ],
    backdrop_path: null,
    adult: false,
    overview: "Live Action Toy Story",
    release_date: "2013-01-08"
    },
    {
    vote_count: 0,
    id: 509981,
    video: false,
    vote_average: 0,
    title: "Toy Story 3 3D",
    popularity: 1.020716,
    poster_path: "/yhhCZZKY6QAU33Y125WQYMgEo6.jpg",
    original_language: "fr",
    original_title: "Toy Story 3 3D",
    genre_ids: [
    16,
    10751
    ],
    backdrop_path: null,
    adult: false,
    overview: "",
    release_date: "2010-02-02"
    },
    {
    vote_count: 0,
    id: 501413,
    video: true,
    vote_average: 0,
    title: "Toy Story of Terror",
    popularity: 1.010589,
    poster_path: "/sDPmRqXNiBHZ0i3jewTVmuVIFiV.jpg",
    original_language: "ko",
    original_title: "Toy Story of Terror",
    genre_ids: [ ],
    backdrop_path: null,
    adult: false,
    overview: "",
    release_date: "2013-10-16"
    },
    {
    vote_count: 1,
    id: 464729,
    video: false,
    vote_average: 7,
    title: "The Story Behind 'Toy Story'",
    popularity: 1.036969,
    poster_path: "/rOaeh83eylKNBkPxUMAUAogb7rS.jpg",
    original_language: "en",
    original_title: "The Story Behind 'Toy Story'",
    genre_ids: [
    99
    ],
    backdrop_path: "/oIgUXB3136p8Y1gf1jqmPdjAFOF.jpg",
    adult: false,
    overview: "The documentary short of Toy Story of why and how the feature length blockbuster sleeper movie became a success and helps to boost Pixar's popularity of making one of the few animation movie production companies in the world today, especially in North America.",
    release_date: "2000-11-14"
    },
    {
    vote_count: 2,
    id: 406122,
    video: false,
    vote_average: 7.5,
    title: "Toy Story at 20: To Infinity and Beyond",
    popularity: 1.436296,
    poster_path: "/3bwzdDafJuj7os2CL9IeHLWxYfX.jpg",
    original_language: "en",
    original_title: "Toy Story at 20: To Infinity and Beyond",
    genre_ids: [
    99
    ],
    backdrop_path: "/2x5sWNzjEXCFdveEQEz3IRs9QbV.jpg",
    adult: false,
    overview: "Retrospective looking at the revolutionary computer-animated feature film Toy Story.",
    release_date: "2015-12-10"
    },
    {
    vote_count: 4,
    id: 431575,
    video: false,
    vote_average: 7.8,
    title: "The Rogue One: A Star Wars Toy Story",
    popularity: 1.713651,
    poster_path: "/qGT8XBRhJCgTLvUmAcw0puG5yAp.jpg",
    original_language: "en",
    original_title: "The Rogue One: A Star Wars Toy Story",
    genre_ids: [
    28
    ],
    backdrop_path: "/bYWxAEsDeTDVA52q0Y68HSQ62bl.jpg",
    adult: false,
    overview: "Craving the attention of her busy father, a 7-year-old Star Wars fan disobeys him and starts a rebellion with his Star Wars toy collection that would have surprising consequences.",
    release_date: "2016-12-15"
    },
    {
    vote_count: 0,
    id: 455535,
    video: false,
    vote_average: 0,
    title: "Dancing Through Life: The Dorothy Toy Story",
    popularity: 1.00006,
    poster_path: "/f3m9NNYj557UI5rr7W0FxGngw6n.jpg",
    original_language: "en",
    original_title: "Dancing Through Life: The Dorothy Toy Story",
    genre_ids: [
    99,
    36
    ],
    backdrop_path: "/kK6Z8tJLMmmU034b8WGZARJNY7U.jpg",
    adult: false,
    overview: "Swinging and twirling Dorothy Toy Fong the legendary tap dancer is still exciting at 99 years old. Award-winning reporter Rick Quan traces Fong’s journey as a famous duo with Paul Wing and exciting run with her Oriental Showgirl group. Fong’s wondrous spirit dances off the screen and into your heart.",
    release_date: ""
    },
    {
    vote_count: 11,
    id: 253150,
    video: false,
    vote_average: 6.5,
    title: "Plastic Galaxy: The Story of Star Wars Toys",
    popularity: 2.031174,
    poster_path: "/p4XtRTZOHoDnCheNX1e1mruperF.jpg",
    original_language: "en",
    original_title: "Plastic Galaxy: The Story of Star Wars Toys",
    genre_ids: [
    99
    ],
    backdrop_path: "/koXWaTPiOAbK9DsOIwIamxcAsQo.jpg",
    adult: false,
    overview: "Plastic Galaxy explores the ground breaking and breathtaking world of 'Star Wars' toys. Through interviews with former Kenner employees, experts, authors, and collectors, the documentary looks at the toys' history, influence, and the passions they elicit today.",
    release_date: "2014-01-14"
    },
    {
    vote_count: 38,
    id: 145316,
    video: false,
    vote_average: 5.7,
    title: "Air Mater",
    popularity: 4.637898,
    poster_path: "/meGOYxqFyWkibJkPIjVydkdOL3E.jpg",
    original_language: "en",
    original_title: "Air Mater",
    genre_ids: [
    16,
    10751
    ],
    backdrop_path: "/59HNGwEqcdZQl1vcKj6kTOwkFJr.jpg",
    adult: false,
    overview: "Mater's decision to fly lands him accidentally at a big airshow.",
    release_date: "2011-08-04"
    }
    ]

    // Tests:

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
    var actual = typeof logic.movieDetails(movieResponse)[0]; 
    var expected = 'object';
    t.deepEqual(actual, expected, "returns an array of objects");  
    t.end(); 
})

test("Should return an array of no more than 5", function(t){
    var actual = logic.movieDetails(movieResponse).length; 
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

// test("Should return an array of a maximum of 5", function(t){
//     var actual = logic.movieDetails([{}, {}]).length; 
//     var expected = 2;
//     t.deepEqual(actual, expected, "returns an array of a maximum of 5 entires");  
//     t.end(); 
// })

//WIKIPEDIA TESTS


