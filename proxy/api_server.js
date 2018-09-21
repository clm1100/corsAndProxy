var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors()); 

app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}))

app.get("/",(req,res)=>{
    res.send("123")
})
app.get("/api/a",(req,res)=>{
    res.send("a")
})
app.get("/b",(req,res)=>{
    console.log(req.headers);
    res.send("b")
})
app.listen(5000);