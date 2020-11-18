console.log('this is running')

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
// Make an Axios call to the API of your choice, and console.log out a segment of the data that you receive as a response. (Axios has been required up the top of the file, and you'll just need to use yarn or NPM to add it so you can use it.) If you are out of API ideas, you can use the url and path above (it's the Star Wars API).
 axios.get(url+path)
    .then(function(res){
        console.log(res.data)
    })

// 2. Functions
// _Please note that I'm not looking for a 'constructor function' in this question, but just a plain ordinary function. Do not use the keyword 'new' in answering the question._
// a. Write a function that takes a string and a number as arguments. Inside this function create an object, and assign the number argument to one key, and the string to another. The third key for this object will be a function, and this function will just console.log out the string value of the key using 'this'. Return this object from the function.
function myFunc (str, num){
        this.objOne = str;
        this.objTwo = num;
        this.objThree = function (){
            return this.objOne        
        }
}
// b. Call this function, and store the returned value into a variable.
let myVar = new myFunc('Tri', 3)

// c. Using this variable, call the function within the object.
myVar.objThree()

// 3. Callbacks
// a. Write a function that takes three arguments: an number, a string, and callback. 
//In this function produce a string that is the given argument string repeated as many times as the number argument, and then passes this resulting string to the callback.


function myNewFunc (aNum, aStr,aCb){
    const RandArray = []

    for (let i = 0; i < aNum; i++){
        console.log(aStr)
        RandArray.push(aStr) 
    }
    
    aCb(aStr + " printed " + RandArray.length + ` times. Well ${RandArray.length + 1} if you include this one.` )

}

myNewFunc(8,'A new String', function(x){
    console.log(x)
})

// b. Now call this function that you have made, and log out the value given to the callback function.


// 4. Data Nesting
// Create a structure that would represent a continent (you can choose the continent, other than Antarctica). It should have (at minimum - you can go further, but don't have to) a key for the name of the continent, and key that will have the value of an array that will contain country objects. 
// Choose at least two countries from your continent, and create objects representing these, and place them within this array (the continent's countries array). These country objects should contain at least two attributes: a name, and an array of cities. For at least one of your country objects you should create a two city object to go within the cities array. It should have at least one attribute, a name. 
// To summarise, this is a nested structure, with a continent object at the top, two countries in the continent object's array of countries, and then two city objects within the array attribute of one of the country objects. 
// If you have any questions about this, please ask me, as you will need this structure in the next question.

const africa = {
    countries: [
        {
            name: 'Tanzania',
            cities: ['Dar es Salaam','Mwanza','Arusha','Dodoma','Mbeya']
        },
        {
            name: 'Egypt',
            cities: ['Abu El Matamir','Badr','Cairo','Dahab','Edfu']
        }
    ]

}

module.exports = {
    africa:africa
}

// 5. Express
// Keep this as simple as possible, and please do not 'require' in any more packages than needed to get the job done. Keep it very lean. If there are too many things required in, I will be asking for your reasoning. You won't need any middleware for this task.
// a. Make a minimal Express app, with one route, the root route ('/'), and send back a simple success message from that route.
// b. Add the continent structure you made in part 3) to the top of this file as a constant.
// c. Make three more routes. The first will send back the whole data structure (a continent), and should be named appropriately. The next two routes will be for responding with the countries and the cities within that structure (a separate route for each, named appropriately). 
// *Please note* that I don't need you to write extensive code to extract countries and cities from _any_ possible continent structure - for the purposes of this task you can assume that this structure you made above is all there is, and somewhat hard code the data. If you need clarification, I am happy to help.
