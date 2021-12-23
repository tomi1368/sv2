const express = require("express")
const multer = require("multer")
const {getAllLocations,deleteLocation,updateLocation,createLocation}  = require("../controllers/locationscontrollers")
const locationRouter = express.Router()

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"./server/public/uploads/")
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})


locationRouter.get("/all",getAllLocations)

locationRouter.post("/",createLocation)

locationRouter.put("/",updateLocation)

locationRouter.delete("/",deleteLocation)

module.exports = locationRouter