const routes = require('express').Router();
const Dpcontroller = require('../controllers/dp-controller')


routes.post('/addAppointment',Dpcontroller.createAppointment)
routes.post('/Authenticate',Dpcontroller.authenticateUser)
routes.get('/getAppointments',Dpcontroller.getAppointments)
routes.put('/updateAppointment/:id',Dpcontroller.updateAppointment)
routes.delete('/deleteAppointment/:id',Dpcontroller.deleteAppointments)

module.exports = routes;