const mongoose = require('mongoose')

const drawSchema = new mongoose.Schema({
    teams: {
        home: {
            type: String,
            required: true
        },
        away: {
            type: String,
            required: true
        }
    },
    // time: {
    //     type: Date,
    //     required: true
    // },
    // date: {
    //     type: Date,
    //     required: true
    // },
    venue: {
        type: String,
        required: true
    },
    round: {
        type: String,
        required: true
    },
    referee: {
        type: String,
        required: true
    },
    linesman1: {
        type: String,
        required: true
    },
    linesman2: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Draw', drawSchema)