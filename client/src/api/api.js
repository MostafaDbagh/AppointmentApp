import axios from 'axios'

const api = axios.create({
    baseURL:'https://dubaipropertiesappointment.herokuapp.com/api'
})

const addAppointment = payload => api.post('/addAppointment',payload)
const getAppointments = () => api.get('/getAppointments')


const apis = {addAppointment,getAppointments}

export default apis    ;