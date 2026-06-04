const express = require("express")

const app = express()

// middleware 
app.use(express.json()) // converts the req. body json data into js object


/* Require all the routes */
const authRouter = require('./routes/auth.route')


/* Prefix of all the auth routes  */
app.use("/user/auth",authRouter)


module.exports = app