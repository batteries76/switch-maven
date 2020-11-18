const express = require('express')
const cors = require('cors')
// const multer = require('multer')
const mongoose = require('mongoose')

const Album = require('./models/Album.js')

mongoose.connect('mongodb+srv://matt:switchmaven@cluster0.pxhul.gcp.mongodb.net/recordStore?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, 
    function(err, database) {
        if (err) {
          throw err;
        } 
        console.log("Connection made to database.")
    }
)

// We can separate out our data too. In the end this will be in a database, but for now we can put it into a module and then import it into our file like this
const data = require('./data.js')

const app = express()
const port = 3000

// const upload = multer();

// Middleware section
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// app.use(upload.array()); 
app.use(express.json())

// We have separated out the views and the data from our main back end section, and you can see that it's much cleaner.
// We'll end up doing things a bit differently in the future, but understanding how imports work is very good to know.

app.get('/', function(req, res) {
    // We can access the ballPlayers part of the data like this:
    console.log('routes are working?')
    // And show it on the front end like this:
    res.send('hello world')
})

app.get('/albums', function(req, res) {
    // The argument to find is an empty object, telling the model to not restrict the search at all.
    // We can refine this search using this parameter.
    Album.find({})
        .then(function(albums) {
            console.log(albums)
            res.send(albums)
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        })
});

app.get('/add-one-album', function(req, res) {

    albumToAdd = new Album({
        title: "Highway to Hell",
        artist: "AC/DC",
        year: 1980,
        genre: "rock"
    })

    albumToAdd.save()
        .then(function(album) {
            console.log("ITEM SAVED!")
            console.log(album)
            res.send(album)
        })
        .catch(function(err) {
            console.log(err)
        })
})

// A route to load several albums
app.get('/add-several-albums', function(req, res) {
    // Mongoose's bulk insert option
    // We are passing the array of albums through to the database.
    Album.insertMany(data.albums)
        .then(function(albums) {
            console.log(albums)
            res.send(albums)
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        });
})

app.post('/albums', function(req, res) {
    console.log("ALBUM POST route hit")
    console.log(req.body)

    albumObject = {
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        genre: req.body.genre
    }

    albumToAdd = new Album(albumObject)

    albumToAdd.save()
        .then(function(album) {
            console.log("ITEM SAVED!")
            console.log(album)
            res.send(album)
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        })
})

// A route to practice route params
app.get('/practice-getting-params-route/:turnip/:carCrash/:scooter', function(req, res) {
    // To hit this route, add the following three lines of code into the albums.http file and hit 'Send Request':
    // GET http://localhost:4400/albums/large-book/666555444/elegent HTTP/1.1

    // ###
    console.log(req.params)
    res.send(req.params)
    // Have a good look at the resulting params, and tinker around with the request and the route until you understand it better.
})

app.delete('/albums/:id', function(req, res) {
    console.log("DELETE ROUTE hit")
    console.log(req.params.id)
    // Here I'm logging out the params from the request. See the last section of the Mongo sheet for more details. What Express is doing here is placing the string that comes after the `/albums/` part (which will looks something like this: 5f96aca6d1adb945e31d6d63), and putting it into a key called 'id' which is placed on the 'params' object within the req object. Whenever you see a `:` in the path, this is what Express will do. It's a common pattern in routing, and express is set up to do this.  
    // See the practice params route for something to tinker with.

    // This uses the model to find the particular album and delete it.
    Album.findByIdAndDelete(req.params.id)
        .then(function(x) {
            console.log(x)
            res.send(x)
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        })
})

app.patch('/albums/:id', function(req, res) {
    console.log("DELETE ROUTE hit")
    console.log(req.params.id)
    dataToUpdate = req.body
    // YOUR CODE GOES HERE
})

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})