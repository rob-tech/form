const passport = require('passport')
const User = require('../schemas/user')
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const jwt = require('jsonwebtoken')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "65198198151654719165121613165161",
    // username: "email",
    // password: "password"
}

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(User.createStrategy())

passport.use(new JwtStrategy(options, async (jwt_payload, done) => { //reading the token
    User.findById(jwt_payload._id, (err, user) => {
        if (err) return done(err, false) //error => unauthorized + error
        else if (user) return done(null, user) //ok => pass it over
        else return done(null, false) //user not found!
    })
    // try{
    //     const user = await User.findById(jwt_payload._id)
    //     if (user)
    //         return done(null, user)
    //     else
    //         return done(null, false)
    // }catch(err)
    // {
    //     return done(err, false)
    // }
}))

module.exports = {
    createToken: (user) => jwt.sign(user, options.secretOrKey, { expiresIn: 10800 }),  //creating the token,

    token: passport.authenticate("jwt", { session: false }),

}