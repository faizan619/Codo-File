const mongoose = require('mongoose');
const DB = process.env.DB;

mongoose.connect(DB)
.then(()=>{
    console.log(`Database Connected Successfully!`);
}) 
.catch((err)=>{
    console.log(`faizan an error occured .The Error is :${err}`);
})