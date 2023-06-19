const express = require("express")
const app = new express();
const path = require("path")
const port = process.env.port  || 8000
const hbs = require("hbs")
require("./db/conn.js")
const router = require("./routers/userId.js");
const e = require("express");

app.use(express.json())

const htmlPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.use(express.static(htmlPath))
app.set("view engine", "hbs")
app.set("views", viewsPath)
app.use(express.urlencoded({extended:false}))
app.use(router)
hbs.registerPartials(partialsPath)



app.listen(port, ()=>{
    console.log("hello myself priyansh jadon")
})
