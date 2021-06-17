
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

updateAppointment = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    DpSchema.findOne({ _id: req.params.id }, (err, appointment) => {
        if (err) {
            return res.status(404).json({
                err,
                message: ' appointment not found!',
            })
        }
        console.log(req.params.id)
        console.log("here is the body"+req.body)
        console.log("here is the app"+appointment)

        appointment.propertytype = req.body.propertytype
        appointment.propertyno = req.body.propertyno
        appointment.time = req.body.time
        appointment.date= req.body.date
        appointment
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: appointment._id,
                    message: 'appointment updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'appointment not updated!',
                })
            })
     })
}

module.exports ={createAppointment,getAppointments,deleteAppointments,updateAppointment}