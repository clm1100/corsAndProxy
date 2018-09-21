var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors({
    credentials: true, 
    exposedHeaders:"clm11",
    origin: 'http://localhost:3000'
}))

app.use((req,res,next)=>{
    // res.set("Access-Control-Allow-Headers","*")
// res.set("Access-Control-Expose-Headers","*")
    next()
})

app.get("/",(req,res)=>{
    res.send("123")
})
app.get("/api/a",(req,res)=>{
    res.send("a")
})
app.get("/b",(req,res)=>{
    console.log(req.headers);
    res.set("clm11","123231")
    res.send("b")
})
app.listen(5000);