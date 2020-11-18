const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
    teams: {
        home: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
            required: true
        },
        away: {
            type: String,
            required: true
        }
    },
    venue: {
        type: String,
        required: true
    },
    round: {
        type: String,
        required: true
    },
    officials: {
        referees: [ 
            {
                type: String,
                required: true
            }  
        ],
        linesmen: {
            linesman1: {
                type: String,
                required: true
            },
            linesman2: {
                type: String,
                required: true
            }
        }
    }
})

module.exports = mongoose.model('Match', matchSchema)