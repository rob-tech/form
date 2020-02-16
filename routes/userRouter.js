const express = require('express')
const passport = require("passport")
const User = require("../schemas/user")
const { createToken, token } = require("../authenticate/index")

const router = express.Router()

router.get("/", async (req, res) => {
    console.log(req)
    res.send(req.user)
    console.log(res)
})


router.post("/register", async (req, res) => {
    try {
        req.body.username = req.body.email
        const newUser = await User.register(req.body, req.body.password)
        res.send(newUser);
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err
        });
    }

})

router.post('/login', passport.authenticate("local"), (req, res) => {
    var token = createToken({ _id: req.user_id })
    res.statusCode = 200
    res.json({
        status: "login ok",
        // username: req.user.username,
        user: req.user,
        token: token,
        success: true
    })
})



router.post('/refresh', passport.authenticate("local"), async (req, res) => {
    try {
    var token = createToken({ _id: req.user_id})
    res.statusCode = 200
    res.json({
        // username: req.user.username,
        user: req.user,
        token: token,
        success: true,
        message: "User refresh OK"
    });
} catch (err) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
}
    })


module.exports = router