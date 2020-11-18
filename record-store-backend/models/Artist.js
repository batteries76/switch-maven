const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({ 
    name: {  
        type: String,
        required: true
    },
    dob: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    }
})

const Artist = mongoose.model('Artist', ArtistSchema)

module.exports = Artist