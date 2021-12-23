const express = require("express")
const {getAllUsers,updateUser,register,login}  = require("../controllers/usercontrollers")
const UserRouter = express.Router()

UserRouter.get("/all",getAllUsers)

UserRouter.post("/register",register)

UserRouter.post("/login",login)

UserRouter.put("/",updateUser)

module.exports = UserRouter