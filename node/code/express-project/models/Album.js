const mongoose = require('mongoose');

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
        type: Number
    },
    genre: {
        type: String
    },
})

const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;