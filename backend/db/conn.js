const mongoose = require('mongoose');

const DB = 'mongodb+srv://faizan_alam:1XblPEyAT4BweZfh@codofile.sdp4hsh.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser:true,
})
.then(()=>{
    console.log(`Database Connected Successfully!`);
})
.catch((err)=>{
    console.log(`faizan an error occured .The Error is :${err}`);
})