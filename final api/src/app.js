const express = require("express")
const app = new express();
require ("./db/conn")
const router = require("./routers/mens");
const port = process.env.port || 8000
app.use(express.json())
 
app.use(router)
app.listen(port, ()=>{
    console.log(`connection is live at port ${port}`)
})