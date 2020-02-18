const express = require('express')
const mongoose = require('mongoose')
const User = require("../schemas/user")
const {token} = require("../authenticate/index")

const router = express.Router()

router.get("/", token, async (req, res) => {
    try {
        const experiences = await User.findById({ _id: req.user._id }, { experiences: [{}] })
        res.send(experiences);
       
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err
        });
    }
})

router.post("/experience", token, async (req, res) => {
    try {
       const experience =  await User.findById({ _id: req.user._id }).updateOne({$push: {experiences: req.body}} )       
        res.send(experience);
       
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err
        });
    }
})



module.exports = router


