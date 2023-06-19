const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error ("imvalid email")
            }
        }
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    },

})

const User = new mongoose.model("User", userSchema)

module.exports = User;