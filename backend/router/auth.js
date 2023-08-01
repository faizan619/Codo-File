const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema')
 
router.get('/',(req,res)=>{
    res.send("Welcome to the Home page from auth.js");
    console.log(`User at URL : localhost:${PORT}${req.url}`)
})

router.post('/register',async (req,res)=>{ 
    const {username,email,password,cpassword,role} = req.body;
    if(!username || !email || !password || !cpassword && role){
        return res.status(422).send({Error: "Please Enter Completed Details for Processing"});
    }

    try{
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({Error:"Email already exist"})
        }
        else if(password!=cpassword){
            return res.status(422).json({Error:"Password are not matching"})
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

router.post('/login', async (req,res)=>{
    try{
        let {username,password} = req.body;

        if(!username || !password){
            return res.status(500).json({Error:"Please fill the data"});
        }

        const userLogin = await User.findOne({username:username});

        if(userLogin){
            const isMatch = await bcrypt.compare(String(password), String(userLogin.password));

            if(!isMatch){
                res.status(400).json({error:"Password Wrong"});
            }
            else{
                res.json({message:"user login successfully"});
            }
        }
        else{
            res.status(401).json({error:"Invalid username or Password!"});
        }

        if(userLogin===null){
            console.log(`Please register to login in codofile`)
        }
        else{
            console.log(`Login Successful - Here is the Completed data`)
            console.log(userLogin);
        }
    }catch(err){
        console.log(`Admin There is an error : ${err}`);
        res.status(400).json({error:"invalid Credential"});
    }
})

module.exports = router