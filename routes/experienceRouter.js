const express = require('express')
const mongoose = require('mongoose')
const Experience = require("../schemas/experience")
const {token} = require("../authenticate/index")

const router = express.Router()

router.get("/",  token, async (req, res) => {
    try {
   
        const experience = await Experience.find({})
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

router.post("/experience", token, async (req, res) => {
    try {
        const exp = await Experience.create(req.body)
        res.send(exp);
       
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


