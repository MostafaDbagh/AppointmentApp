const mongoose = require('mongoose');

const DpShcema = new mongoose.Schema(
    {
        username:{type:String,required:true},
       password:{type:String ,required:true},
       
     
    }
)

module.exports=mongoose.model('users',DpShcema)