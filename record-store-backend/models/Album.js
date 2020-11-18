const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({ 
    title: {  
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        min: 1700,
        max: 2022
    },
    genre: {
        type: String
    }
})

module.exports = mongoose.model('Album', AlbumSchema)