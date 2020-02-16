const {Schema} = require('mongoose')
const mongoose = require('mongoose');


const Experience = new Schema({
    role: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Experience', Experience)