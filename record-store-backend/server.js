const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const Album = require('./models/Album.js')
const Artist = require('./models/Artist.js')
const Draw = require('./models/Draw.js')
const Match = require('./models/Match.js')

const data = require('./data/data.js')

const app = express()
const port = 4400

mongoose.connect('mongodb+srv://matt:switchmaven@cluster0.pxhul.gcp.mongodb.net/recordStore?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connection made with to MongoDB with MONGOOSE")
    }
    
});

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/seed-one-draw', function(req, res) {

    console.log("HIT THE SEED ROUTE")
    
    mongooseDrawObj = new Draw(data.draw)
    
    mongooseDrawObj.save()
        .then(function(draw) {
            console.log(draw)
            res.send(draw)
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        })
})

app.get('/artists', function(req, res) {
    Artist.find({})
        .then(function(artists) {
            res.send(artists)
        })
        .catch(function(err) {
            console.log(err)
        })  
})

app.get('/', function(req, res) {
    console.log('routes are working?')
    // And show it on the front end like this:
    res.send('hello world NEW PROJECT')
})

app.get('/albums', function(req, res) {
    console.log('the GET ALBUMS route was hit')
    Album.find({})
        .then(function(albums) {
            res.send(albums)
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        })
})

app.post('/albums', function(req, res) {
    const albumToAdd = req.body
    console.log(albumToAdd)

    mongooseAlbum = new Album(albumToAdd)
    mongooseAlbum.save()
        .then(function(album) {
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
    console.log(req.params)
    console.log(req.params.carCrash)
    res.send(req.params)
    // Have a good look at the resulting params, and tinker around with the request and the route until you understand it better.
})

app.patch('/albums/:id', function(req, res) {
    console.log("HITTING the UPDATE route")
    console.log(req.params.id)
    Album.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
        .then(function(album) {
            console.log(album)
            res.send(album)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
})

app.delete('/albums/:id', function(req, res) {
    console.log("HITTING the DELETE route")
    console.log(req.params.id)
    Album.findByIdAndDelete(req.params.id)
        .then(function(album) {
            console.log(album)
            res.send(album)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
})

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})