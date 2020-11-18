const express = require('express')
const cors = require('cors')

// this line inports those string in as parts of an object we are calling 'views'
const views = require('./views')
// We can separate out our data too. In the end this will be in a database, but for now we can put it into a module and then import it into our file like this
const data = require('./data')

const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))

// We have separated out the views and the data from our main back end section, and you can see that it's much cleaner.
// We'll end up doing things a bit differently in the future, but understanding how imports work is very good to know.

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.get('/players', function(req, res) {
    // We can access the ballPlayers part of the data like this:
    console.log(data.ballPlayers)
    // And show it on the front end like this:
    res.send(data.ballPlayers)
})

app.get('/waiting', function(req, res) {
    const waitTime = Math.floor(Math.random() * 1000)
    setTimeout(function() {
          console.log("Set time out finished")
          res.send(`Set timeout finished in ${waitTime}`)
        }, 
        waitTime 
    )    
})

app.get('/our-form', function(req, res) {
    res.send(views.form)
})

app.post('/my-handling-form-page', function(req, res) {
    console.log(req.body)
    const email = req.body.userEmail
    res.send(`FORM SENT, email: ${email}`)
})

app.get('/fruit-filter', function(req, res) {
    // Questions 3 and 4
    console.log(data.fruits)
    // Question 3
    const filteredFruits = data.fruits.filter(function(fruit) {
        return fruit[0] === req.query.letter
    })

    // Question 4
    const htmlFruitArray = filteredFruits.map(function(fruit) {
        return `<li> ${fruit} </li>`
    })
    console.log(htmlFruitArray)

    const htmlStringFruits = htmlFruitArray.join("")
    console.log(htmlStringFruits)

    const htmlHeading = `<h2> Filtered Fruits </h2>`
    const unorderedList = `<ul>${htmlStringFruits}</ul>`
    divString = `<div> ${htmlHeading} ${unorderedList} </div>`

    res.send(divString)
})

app.get('/number-checker', function(request, response) {
    const number = request.query.number
    console.log(number)
    if (number === "1") {
        response.send(`<h${number}> Number Checker ONE </h${number}>`)
    }
    else if (number === "2") {
        response.send(`<h${number}> Number Checker TWO </h${number}>`)
    }
    else if (number === "3") {
        response.send(`<h${number}> Number Checker THREE </h${number}>`)
    }
    else {
        response.send('<h1> NOT A VALID NUMBER </h1>')
    }
})

app.get('/dog', function(req, res) {
    // Here we are checking out some other data, just as an example
    console.log(data.animals)
    // Here we are getting our dog view from the dog attribute of the views object that we imported from the views file.
    res.send(views.dog)
})

app.get('/cat', function(req, res) {
    // Same same in here as for dog, but just the cat stuff
    console.log(data.animals)
    res.send(views.cat)
})

app.get('/animals', function(req, res) {
    // ping database to see if giraffe is in the database
    // respond if it is or isn't 
    const animal = req.query.animal

    if (data.animals.includes(animal)) {
        res.send(`<h1> ${animal} is IN! </h1>`)
    }
    else {
        res.send(`<h1> ${animal} is NOT HERE </h1>`)
    }
})

app.get('/something', function(req, res) {

    // console.log(req.query)
    console.log(req.query.key1)
    console.log(req.query.football)

    if (req.query.key1 === 'green' && req.query.football === 'geelong') {
        res.send("GREEN FOOTBALL GEELONG")
    }
    else {
        res.send('You hit the something route!')
    }

})

app.get('/fruits', function(req, res) {

    const arrayHtml = data.fruits.map(function(item) {
        return `<li> ${item} </li>`
    })
    console.log(arrayHtml)
    stringHTML = arrayHtml.join("")
    console.log(stringHTML)
    const list = `<ul> ${stringHTML} </ul>`
    res.send(list)

})

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})

// const express = function() {
//     const app = {
//         get: function(path, cb) {
//             const req = {
//                 send: function(arg) {

//                 }
//             }
//             const res = {

//             }
//             cb(res, req)
//         },
//         listen: function(port, cb) {

//         }
//     }
//     return app
// }