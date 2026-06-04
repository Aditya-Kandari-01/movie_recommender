require("dotenv").config() 
const app = require('./src/app')

// Db connection

const connectToDB = require("./src/connection/db")

connectToDB()

const PORT = process.env.PORT;
app.listen(10000,()=>{
    console.log(`Server is running on port ${PORT}`)
}) 