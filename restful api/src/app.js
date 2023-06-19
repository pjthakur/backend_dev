const express = require("express")
require("./db/connection")
const Student = require("./models/students")
const app = new express();
app.use(express.json())
const port = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("hello my name is priyansh")
})
app.post("/students", async (req, res)=>{
    try{
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    }catch(err){
        res.status(400).send(err)
    } 
})
app.get("/students", async(req,res)=>{
    try {
        const data= await Student.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
app.get("/students/:id", async(req,res)=>{
    try {
        const _id = req.params.id
        const user = await Student.find({phone:_id})
        if(user){
            console.log(user)
            res.send(user)
        }
        else{
          return  res.status(404).res.send()
        }
    } catch (error) {
        res.status(500).send(error)
    }
})
app.patch("/students/:id", async (req,res)=>{
    const _id = req.params.id

    try {
        const updateData = await Student.findOneAndUpdate({phone:_id}, req.body)
        res.send(updateData)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.delete("/students/:id", async (req, res)=>{
    const _id = req.params.id
    try {
        const deleteUser = await Student.findOneAndDelete(_id)
        if(!deleteUser){
            res.status(404).send()
        }
        else{
            res.send(deleteUser)
        }
    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(port, ()=>{
    console.log(`connection is successfull at ${port}`)
})