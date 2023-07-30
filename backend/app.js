const express = require('express')
const app = new express()
const PORT = process.env.PORT || 5000;

require('./db/conn');

const consoleURL = (req,res,next)=>{
    console.log(`User at URL : localhost:${PORT}${req.url}`);
    next();
}

app.get('/',consoleURL,(req,res)=>{
    res.send('Hello world');
})
app.get('*',consoleURL,(req,res)=>{
    res.send(`<center><h1>404 </h1><h3>The Page you are Looking for is Not Found</h3></center>`)
})

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
})