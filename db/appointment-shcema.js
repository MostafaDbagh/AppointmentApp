const mongoose = require('mongoose');

const DpShcema = new mongoose.Schema(
    {
        propertytype:{type:String,required:true},
       propertyno:{type:String ,required:true},
       time:{type:String,required:true},
       date:{type:String,required:true},
     
    }
)

module.exports=mongoose.model('DpAppointment',DpShcema)