const fs = require('fs');
const os = require('os')
// fs.mkdir("thapa", (err)=>{
//     console.log("file created")
// })
// fs.writeFile("./thapa/pj.txt", "my name is priyansh jadon",(err)=>{
//     console.log("file created")
//     console.log(err)
// })
// fs.appendFile("./thapa/pj.txt", "and i am a good boy", (err)=>{
//     console.log("appended")
// })
// fs.readFile("./thapa/pj.txt","UTF-8" ,(err, data)=>{
//     console.log(data)
// })
// fs.rename("./thapa/pj.txt", "./thapa/pappu.txt", (err)=>{
//     console.log("renamed")
// })
// fs.unlink("./thapa/pappu.txt", (err)=>{
//     console.log('removed')
// })
// fs.rmdir("./thapa" ,(err)=>{
// console.log("deleted folder")
// })
// console.log(os.hostname())
const http = require("http")
// const url =require('url')
const server = http.createServer((req, res)=>{
    if(req.url=="/"){
        res.end("hi from priyansh")
        
    }
    else if(req.url=="/hello"){
        res.end("hellow from priyansh")
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end('<h1>error 404</h1>')
    }
})
server.listen("8000","127.0.0.1", ()=>{
    console.log("this is the ")
})