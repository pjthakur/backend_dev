const express = require("express")
const app = new express()

app.get("/", (req,res)=>{
    res.send("hello from the express")
})
app.get("/about", (req,res)=>{
    res.send("hello i am about")
})
app.get("/contact", (req,res)=>{
    res.send("hello i am contact")
})
app.get("/menu", (req,res)=>{
    res.send("hello i am menu")
})
app.get("/pappu", (req,res)=>{
    res.send("hello i am pappu")
})
app.get("/jhappu", (req,res)=>{
    res.send({
        he:1,
        me:"myself"
    })
})
app.listen(8000,()=>{
    console.log("listening to the port")
})