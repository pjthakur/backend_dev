const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017")
.then(()=>{console.log("connected")})
.catch((err)=>{
    console.log(err)
})

const pSchema = new mongoose.Schema({
    name:String,
    class:Number,
    autor:String,
    date:{
        type:Date,
        default:Date.now
    }
})
const Candidate = new mongoose.model("CandidateInfo", pSchema)
const createDocument = async  () =>{
    try{
        const user1 = new Candidate({
            name:"Priyansh",
            class:2,
            autor:"pj",
        })
        const user2 = new Candidate({
            name:"Priyansh",
            class:2,
            autor:"pj",
        })
        const user3 = new Candidate({
            name:"Priyansh",
            class:2,
            autor:"pj",
        })
        const result = await Candidate.insertMany([user1, user2, user3])
    }catch{(err)=>{
        console.log(err)
    }    }
}

// createDocument();
const getDocument = async () =>{
    const result = await Candidate.find({name:"Priyansh"})
    console.log(result)

}
getDocument();