const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    tokens:[
        {
            token:{
                type:String,
            }
        }
    ]
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,10);
        this.cpassword = await bcrypt.hash(this.cpassword,10);
    }
    console.log(`The Hash password is :${this.password}`)
    next();
})

// we are geenrating jokens
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(`Dude there is an error :${err}`);
    }
}

const User = mongoose.model("User",userSchema);

module.exports = User;

