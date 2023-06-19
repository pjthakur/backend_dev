const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/finalapi")
.then(()=>{console.log("connection is established")})
.catch((e)=>{
    console.log("no connection")
})