const mongoose = require('mongoose')
const Artist = require('../models/Artist')

mongoose.connect('mongodb+srv://matt:switchmaven@cluster0.pxhul.gcp.mongodb.net/recordStore?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connection made with to MongoDB with MONGOOSE")
        artists.forEach(function(artist) {
            mongooseObjArtist = new Artist(artist)
            mongooseObjArtist.save()
                .then(function(artist) {
                    console.log(artist)
                })
                .catch(function(err) {
                    console.log(err)
                })
        })
        
        console.log("SEED FILE RAN")
    }
    
});

const artists = [
    {
        name: "AC/DC",
        country: "Australia",
        city: "Melbourne"
    },
    {
        name: "The Smiths",
        country: "UK",
        city: "Manchester"
    },
    {
        name: "Pearl Jam",
        country: "USA",
        city: "Seattle"
    }
]

