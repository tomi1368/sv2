require('dotenv').config()
const express = require("express")
const methodOverride = require("method-override")
const cors = require("cors")
const connectDB = require("./db/config/db")

const app = express()
const PORT = process.env.PORT || 4000

const characterRouter = require('./routes/characterRoutes')
const locationRouter = require('./routes/locationRoutes')
const UserRouter = require('./routes/userRoutes')
const PrivateRouter = require("./routes/private")

const url = "https://rickandmortysv.herokuapp.com"


connectDB()
app.use(express.json())
app.use(methodOverride())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/characters",characterRouter)

app.use("/locations",locationRouter)

app.use("/users", UserRouter)

app.use("/private",PrivateRouter)


app.listen(PORT,(req,res)=>{
    console.log(`Server up on Port ${PORT}`)
})

