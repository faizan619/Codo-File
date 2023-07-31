const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"not_mentions",
    },
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,10);
        this.cpassword = await bcrypt.hash(this.cpassword,10);
    }
    console.log(`The Hash password is :${this.password}`)
    next();
})

const User = mongoose.model("User",userSchema);

module.exports = User;

