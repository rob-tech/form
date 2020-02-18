const mongoose = require('mongoose');
const { Schema} = require("mongoose")
const validator = require("validator")
const passportLocalMongoose = require("passport-local-mongoose")


const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // lowercase: true,
        required: true,
        // validate(value) {
        //                 if(!validator.isEmail(value)){
        //                     throw new Error("Invalid Email!!")
        //                 }
    // }
},
experiences:  [{
    _id: {type: Schema.Types.ObjectId, auto: true},
    role: String,
    company: String,
    startDate:  Date,
    endDate: Date,
    description: String,
    }]

})

const options = {
    username: "email",
    password: "password"
  };

User.plugin(passportLocalMongoose, options)
module.exports = mongoose.model('User', User);

