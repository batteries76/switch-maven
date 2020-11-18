const axios = require('axios')

const url = 'https://swapi.dev/api/'
const path = 'planets/3/'

// NODE REVIEW CHALLENGE
// This is a bit of practice of some of the topics we have covered in the past few weeks.
// Please ask any questions that will help clarify things. I'm not trying to cath you out, and I want it to be clear what the question is asking you to do.  
// I am looking for simplicity here, so keep your responses clear and lean.
// Please code out the answers under the appropriate question.
// Send this file (with your solutions) to me as a JS snippet in a DM.


// 1. Axios
// Make an Axios call to the API of your choice, and console.log out a segment of the data that you receive as a response. 
// Please dig deeper into the response than just the whole data object. Find a name or something more specific within the data. 
// Axios has been required up the top of the file, and you'll just need to use yarn or NPM to add it so you can use it.
// If you are out of API ideas, you can use the url and path above (it's the Star Wars API).

axios.get(url + path)
    .then(function(res) {
        console.log(res.data.gravity)
    })
    .catch(function(err) {
        console.log(err)
    })


// 2. Functions
// _Please note that I'm not looking for a 'constructor function' in this question, but just a plain ordinary function. Do *not* use the keyword 'new' in answering the question._
// a. Write a function that takes a string and a number as arguments. Inside this function create an object, and assign the number argument to one key, and the string to another. The third key for this object will be a function, and this function will simply console.log out the string value of the key using 'this'. Return this object from the function.
// b. Call this function, and store the returned value into a variable.
// c. Using this variable, call the function within the object.

const createObj = function(str, num) {
    const newObj = {
        strKey: str,
        numKey: num,
        printFunc: function() {
            console.log(this.strKey)
        }
    }
    return newObj
}

const returnedObj = createObj("banana", 5)

returnedObj.printFunc()

// 3. Callbacks
// a. Write a function that takes three arguments: an number, a string, and callback. In this function produce a string that is the given argument string repeated as many times as the number argument, and then passes this resulting string to the callback.
// b. Now call this function that you have made, and log out the value given to the callback function.

const stringRepeat = function(str, num, cb) {
    const repStr = str.repeat(num)
    cb(repStr)
}

stringRepeat("apple", 5, function(repString) {
    console.log(repString)
})


// 4. Data Nesting (read the whole question before starting)
// Create a structure that would represent a continent (you can choose the continent, other than Antarctica). It should have (at minimum - you can go further, but don't have to) a key for the name of the continent, and key that will be an array that will contain country objects. 
// Choose at least two countries from your continent, and create objects representing these, and place them within this array (the continent's countries array). These country objects should contain at least two attributes: a name, and an array of cities. 
// For at least one of your country objects you should create a two city objects to go within the cities array. It should have at least one attribute, a name. 
// To summarise, this is a nested structure, with a continent object at the top, two country objects in the continent object's array of countries, and then two city objects within the cities attribute of one of the country objects. 
// If you have any questions about this, please ask me, as you will need this structure in the next question.
// If it makes more sense, you can build from the cities to the countries to the continent. Make the two cities first, then the two countries, then the one continent. You can then put the objects in the appropriate arrays within the 'parent' object. 

const asia = {
    name: "Asia",
    countries: [
        {
            name: "Japan",
            cities: [
                {
                    name: "Tokyo"
                },
                {
                    name: "Osaka"
                }
            ]
        },
        {
            name: "Laos",
            cities: []
        }
    ]
}

const tokyo = {
    name: "Tokyo"
}

const japan = {
    name: "Japan",
    cities: [ tokyo ]
}

const asia2 = {
    name: "Asia",
    countries: [ japan ]
}

// 5. Express
// Keep this as simple as possible, and please do not 'require' in any more packages than needed to get the job done. Keep it very lean. If there are too many things required in I will be asking for your reasoning. 
// You won't need any middleware for this task.
// When sending the data, you can just send it as is (which Express will package as JSON). There is no need to send it as HTML or dress it up in any way.
// a. Make a minimal Express app, with one route, the root route ('/'), and send back a simple success message from that route.
// b. Add the continent structure you made in part 3) to the top of this file as a constant (you can put it in a separate file and require it in if you like, but you are not required to).
// c. Make three more routes. The first will send back the whole data structure (a continent, the one you made), and the path can be '/continent'. The next two routes will be for responding with the countries and the cities within the structure (a separate route for each, one '/countries', and one '/cities'). Send all the countries out from the '/countries' route, and all the cities from the '/cities' route. 
// *Please note* that I don't need you to write extensive code to extract countries and cities from _any_ possible continent structure - for the purposes of this task you can assume that this structure you made above is all there is, and somewhat hard code the data. If you need clarification I am happy to help.

const express = require('express')

const app = express()

app.get('/', function(req, res) {
    console.log("Success")
    res.send("Success connecting to API")
})

app.get('/continent', function(req, res) {
    res.send(asia)
})

app.get('/countries', function(req, res) {
    res.send(asia.countries)
})

app.get('/cities', function(req, res) {
    res.send(asia.countries[0].cities)
})

app.listen(3000, function() {
    console.log("express running")
})