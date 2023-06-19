const express = require("express")
const router = new express.Router()
const UserInput = require("../models/user")

// router.get("/",(req,res)=>{
//     res.render("index")
// })
router.get("/", (req,res)=>{
    res.render("index")
})
router.get("/register", (req,res)=>{
    res.render("register")
})

router.post("/register", async (req,res)=>{
    try {
        
        const user = new UserInput(req.body)
        const insertion  = await user.save();
        res.status(201).send(insertion)

    } catch (e) {
        res.status(400).send(e)
    }
})
router.get("/user", async (req,res)=>{
    try {
        const user = await UserInput.find()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get("/user/:id", async (req,res)=>{
    try {
        const _id = req.params.id
        const user = await UserInput.findOne({name:_id})
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete("/user/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
        console.log(_id)
        const user = await UserInput.findOneAndDelete({name:_id})
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router