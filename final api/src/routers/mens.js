const express = require("express")
const router = new express.Router();
const MensRanking = require("../models/men");

router.post("/men",async (req,res)=>{
    try {
        const men =  new MensRanking(req.body)
        const insertMen =  await men.save()
        res.send(insertMen)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/men", async (req,res)=>{
    try {
        const men = await MensRanking.find({}).sort({ranking:1})
        res.send(men)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/men/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id)
        res.send(getMen)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete("/men/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id)
        res.send(getMen)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.patch("/men/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(getMen)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router