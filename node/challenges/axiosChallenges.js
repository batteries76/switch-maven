// Axios challenges

// You can run Axios in JS or in Node (in Node you just require in 'axios' after installing it), but here we are going to run Axios in the front end. 
// To get some practice with the setup of the front end: create a separate folder for these challenges; set up a small server with the Express static commands (see teaching materials); set up a public folder with index.html; put two directories in that public folder, /js and /css; place an index.js file in the /js and a styles.css in the /css. 
// Check that it all works when you start your server, and perhaps put a console.log in the index.js to see that feedback in the console. If you want to check your CSS is connected, change the background colour of the body, and check that this is reflected in the browser.
// Put this script in the head of your index.html: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// If everything seems to be connected, you are good to go.

// 1. Run the following code:
axios.get('https://swapi.dev/api/starships/9/')
    .then(function(res) {
        console.log(res.data)
    })
// You should see the data in the console. 
// a. Refine this by logging out the name of the ship, the manufacturer, and the number of crew.
// b. Log out the list of films relating to this starship.
// c. Make a new Axios request to the same API, but find a different starship.
// d. Log out the list of movie URLs that the startship appears in.
// e. Using that list, hit the API for each movie in the list, and log out the title of each movie. 

// 2. Pokemon API. 
// a. Find at least three Pokemon via the API, and log out their names.
// b. Log out three other attributes of these three Pokemon.

// 3. More APIs
// Using the following resources (or doing any of your own research), hit ten different APIs using axios. Log some piece of data from each (and multiple pieces would be better)
// https://medium.com/better-programming/a-curated-list-of-100-cool-and-fun-public-apis-to-inspire-your-next-project-7600ce3e9b3
// https://www.twilio.com/blog/cool-apis
// https://apilist.fun

// 4. Attaching the data to the DOM (Star Wars API)
// a. Make a div in your HTML to anchor the starship data. You just need it to have an id. 
// b. Using the data above, attach (append) some simple HTML to that anchor point when the starship data comes back from the API. It should contain the three details that you logged out in 1a.
// c. Find a way to also render the names of the movies that the starship appears in to the DOM.

// 5. Pokemon to DOM
// Follow a similar process for the Pokemon API. You just need to show that you can fetch and then render some data from the API.

// 6. Weather API
// a. Find a free weather API, and see if you can render to your HTML a little weather widget. You might have a little square on your page with the temperature and description for the current conditions. Whatever you like. 
// b. If you feel like getting fancy, you could represent the different conditions with a different image (for cloudy or sunny, etc).
// c. A further extension could be to use setInterval() to hit this API at regular intervals, and refresh the data shown on the page.