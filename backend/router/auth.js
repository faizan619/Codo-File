const express = require('express');
const router = express.Router();
const PORT = process.env.PORT

const User = require('../model/userSchema')
 
router.get('/',(req,res)=>{
    res.send("Welcome to the Home page from auth.js");
    console.log(`User at URL : localhost:${PORT}${req.url}`)
})

router.post('/register',(req,res)=>{ 
    const {username,email,password,cpassword,role} = req.body;
    if(!username || !email || !password || !cpassword || !role){
        return res.status(422).send({Error: "Please Enter Completed Details for Processing"});
    }

    console.log(`Your username is : ${username}`);
    console.log(`Your password is : ${password}`);
    console.log(`You are a : ${role}`);
    res.send("For Submitted Successfully")
})

module.exports = router