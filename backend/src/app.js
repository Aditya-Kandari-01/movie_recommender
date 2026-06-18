const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

// middleware 
app.use(express.json()) // converts the req. body json data into js object
app.use(cookieParser())

/* Require all the routes */
const authRouter = require('./routes/auth.route')


/* Prefix of all the auth routes */
app.use("/user/auth",authRouter)


module.exports = app