const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const bcrypt = require('bcryptjs');
const {generatefile} = require('./generatePy')
const {executepy} = require("./executepy")
const {executeDart} = require('./executeDart')
const {generateDartfile} = require('./generateDart')

require('../db/conn');
const User = require('../model/userSchema')
 
router.get('/',(req,res)=>{
    res.send("Welcome to the Home page from auth.js");
    console.log(`User at URL : localhost:${PORT}${req.url}`)
})

//################ python compiler code here ##################
router.use(express.urlencoded({extended:true}))
router.post('/runpy',async(req,res)=>{
    const {language="py",code="print('hello python')"} = req.body;

    if(code === ""){
        return res.status(400).json({success:false,error:"Please Enter Code"});
    }
    try{
        // need to generate a py file from the request 
        const filepath = await generatefile(language,code)
        // we need to run the file and sent response back
        const output = await executepy(filepath)
        return res.json({filepath,output});
    }
    catch(err){
        // res.status(500).json({error:"Syntax Error: Please Check Your Code"});
        // res.status(500).json({error:`${err}`});

        const errorMessage = err.toString();
        const errorPattern =  /line \d+\s+([^\n]+)/;
        const match = errorMessage.match(errorPattern);
        const realError = match ? match[0].trim() : "Unknown error occurred";
        
        res.status(500).json({ error: `Error: ${realError}` });

    }
})
// ################## dart compiler code here ##################
router.post('/rundart',async(req,res)=>{
    const {language="dart",code="void main(){print('hello dart');}"} = req.body;

    if(code === ""){
        return res.status(400).json({success:false,error:"Please Enter Code"});
    }
    try{
        // need to generate a py file from the request 
        const filepath = await generateDartfile(language,code)
        // we need to run the file and sent response back
        const output = await executeDart(filepath)
        return res.json({filepath,output});
    }
    catch(err){
        // res.status(500).json({error:`${err}`});        

        const errorPattern =  / Error: ([^\n]+)\n([^\n]+)/;
        // const errorPattern =  / Error: ([^\n]+)/;
        const errorMessage = err.toString();
        const match = errorMessage.match(errorPattern);
        const realError = match ? match[0].trim() : "Unknown error occurred";
        
        res.status(500).json({ error: `Error: ${realError}` });

    }
})


// registration code here
router.post('/register',async (req,res)=>{ 
    const {username,email,password,cpassword,role} = req.body;
    if(!username || !email || !password || !cpassword && role ){
        return res.status(422).send({Error: "Enter Completed Details for Processing"});
    }

    try{
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(421).json({Error:"Email already exist"})
        }
        else if(password!=cpassword){
            return res.status(420).json({Error:"Password are not matching"})
        }
        else{
            const user = new User({username,email,password,cpassword,role});
            await user.save();
            res.status(200).json({success:"User Register Successfully"});
        }
    }catch(err){
        console.log(`Admin There is an Error : ${err}`);
    }


    console.log(`Your Register password is : ${password}`);
    console.log(`Your Register username is : ${username}`);
    console.log(`You are a : ${role}`);
})


// login code here
router.post('/login', async (req,res)=>{
    try{
        let token;
        let {username,password} = req.body;

        if(!username || !password){
            return res.status(403).json({Error:"Please fill the data"});
        }

        const userLogin = await User.findOne({username:username});

        if(userLogin){
            const isMatch = await bcrypt.compare(String(password), String(userLogin.password));

            token = await userLogin.generateAuthToken();
            console.log(`The new Token Generated is : ${token}`)
            res.cookie("jwt_users_token",token,{
                expires:new Date(Date.now() + 25892000000),   //it is 30 days;
                httpOnly:true
            });
 
            if(!isMatch){
                res.status(402).json({error:"Password Wrong"});
            }
            else{
                res.status(200).json({message:"user login successfully"});
            }
        }
        else{
            
            res.status(400).json({error:"Invalid username or Password!"});
        }

        if(userLogin===null){
            res.status(401).send("please register to login")
            console.log(`Please register to login in codofile`)
        } 
        else{
            console.log(`Login Successful - Here is the Completed data`)
            console.log(userLogin);
        }
    }catch(err){
        console.log(`Admin There is an error : ${err}`);
        // res.status(400).json({error:"invalid Credential"});
    }
})

router.get('/logout',(req,res)=>{
    console.log("Hello the account is logout");
    
    res.status(200).send('User Logout');
})

module.exports = router