const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const passport = require("passport")
const experienceRouter = require('./routes/experienceRouter')
const userRouter = require('./routes/userRouter')


require('dotenv').config()

const server = express()

server.set("port", process.env.PORT || 3000);

server.use(cors())
server.use(express.json());
server.use(passport.initialize());

server.use('/form', experienceRouter)
server.use('/user', userRouter)

mongoose.connect(process.env.MONGOCONNECT, {
    useNewUrlParser: true
}).then(server.listen(server.get("port"), () => {console.log("Server is running on " + server.get("port"));
})).catch(err => console.log(err))


//refresh not working with 'jwt'
//experience router not working with token/jwt