## Movie Search Thing 🎥

The Movie Search Thing is an app that lets you search a movie title and outputs a list of 4 movies that match your query, using the MovieDB API.

The app also lets you see 4 actors who star in the movie, using the Wikipedia API. The actors photos can be clicked to access their Wikipedia page.

In order to use the app, you need to:

- Clone our repo by typing `git clone https://github.com/fac-13/HyGiJeJe.git` in your terminal.

- If you'd like to run our tests type `npm install` & `npm test` in the terminal, then in `package.json` > `scripts` add: `"test": "nyc tape test.js | tap-spec"`



## User Stories


-   I would like to be able to search for a movie and be presented with a list of movies that match what I searched for
-   I would like my movie search results to tell me what each of the movies are about
-   I would like to be able to see some cast information for the movie
-   I would like to be able to see an image of the cast members that I am presented with as well as some information about them
-   I would like to be able find out more about the cast by viewing the wikipedia entry for the cast member I want to find out more about
-   As a visually impaired person I would like to be able to navigate the website enjoying the same functionality as sighted users
-   I would like to be able to access the website on devices of different sizes and have a consistent experience

## About our site

 - Users of our site will enter a search term in the landing page input field. The search is for a film title and on submit the first call will be to the [The Movie Database API](https://www.themoviedb.org/documentation/api).

 - This first call will request a list of movies matching the search term and the response expected is a list of movie objects with titles matching the key words.

 - We then trim this list to return only the top four entries and pass these back to the page as formatted list items, where they are displayed to the user.

- The result of the first API call is used to make another request to the MovieDB API which will return cast information.

 - The result for the cast is then trimmed to a maximum of 4 actors.

 - The cast result is used to make a call to the Wikipedia API to get photos and summaries for each of the queried actors.


## HOW: describing the journey to completion


### 13.03.18 - First discussions

1.  Discussed general idea for which api's to use in our project, our initial ideas (nearby movie and times locator, cute bunnies gif creator, recpie app generator with leftover ingredients & calorie counter)
2.  created HTML & CSS files.

### 14.03.18 - First day

1. We Discussed and decided to create web app for children which teaches them about animals by providing information on the animal and where you can find them.

2. We added the corresponding javascript files (dom.js, logic.js, test.js)

    * **logic.js** - for making the API calland storing the data in an object.
    * **dom.js** - for calling the API through the users click interaction and processing the data to the desired location on the HTML page.
    * **test.js** - Our functions were built using TDD whereby we create functions first and test it on a dummy object (testDoubles.js).

3. **Disater!!!**

    We decided to use an external api from http://apiv3.iucnredlist.org/api/v3/docs however a request for their API key took longer than 2 days :scream_cat: :scream_cat: :scream_cat: :scream_cat:

    We took a major decision to change our whole project however still using the generic layout we had decided on.

    Our project now is a **movies web app** which **outputs** an **image** and **information** on the movie you search.


### 15.03.18 - Second day

1. We created test functions for our API calls and tested them with test doubles.

2. We traversed the dom to output the information on to the page using callbacks functions.

3. We worked on the styling and layout of our app.

### 16.03.18 - Third day

1. We responded to issues raised during code review.

2. We worked on implementing the Wikipedia API call, so to display some information on the actors along with the details of the movie.
