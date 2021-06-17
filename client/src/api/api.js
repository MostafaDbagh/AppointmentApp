import axios from 'axios'

const api = axios.create({
     baseURL:'https://dubaipropertiesappointment.herokuapp.com/api'
    //  baseURL:"http://localhost:4050/api/"
})

const addAppointment = payload => api.post('/addAppointment',payload)
const deleteAppointment = id => api.delete(`/deleteAppointment/${id}`)
const updateAppointment = (id,payload) => api.put(`/updateAppointment/${id}`,payload)
const getAppointments = () => api.get('/getAppointments')


const apis = {addAppointment,getAppointments,deleteAppointment,updateAppointment}

export default apis    ;