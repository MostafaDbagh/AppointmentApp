const routes = require('express').Router();
const Dpcontroller = require('../controllers/dp-controller')

routes.post('/addAppointment',Dpcontroller.createAppointment)
routes.get('/getAppointments',Dpcontroller.getAppointments)
routes.delete('/deleteAppointment/:id',Dpcontroller.deleteAppointments)

module.exports = routes;