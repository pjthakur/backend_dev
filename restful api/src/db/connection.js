const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
.then(()=>{
console.log('connection successfull')
})
.catch((err)=>{
    console.log("no connection")
})