const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost:27017/finalProject")
.then(()=>{
    console.log("connection is successfull")
}).catch((e)=>{
    console.log(error)
})