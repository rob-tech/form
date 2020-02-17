
const mongoose = require('mongoose');
const {Schema} = require('mongoose')


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
    },
    endDate: {
        type: Date,
    },
    description: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Experience', Experience)

