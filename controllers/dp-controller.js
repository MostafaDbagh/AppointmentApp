
const DpSchema = require('../db/appointment-shcema')
const db = require('../database/mongodb')
createAppointment = (req,res)=>{
    const body = req.body

    if (!body) {
   
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
      
    const appointment = new DpSchema(body)
    

    if (!appointment) {
        
        return res.status(400).json({ success: false, error: err })
    }

    appointment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: appointment._id,
               
            })
        })

}
getAppointments = (req,res)=>{
    
    const appointments =  DpSchema.find();
    appointments.exec(function(err, data){
        if(err) throw err;
        return res.json(data);
    })

}
deleteAppointments = (req,res)=>{
    
   DpSchema.findByIdAndRemove({ _id: req.params.id },function (err,data) {
       if (err) res.json(err)
       else res.json('Employee deleted successfully')
   })


}
module.exports ={createAppointment,getAppointments,deleteAppointments}