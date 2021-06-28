import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container,
  Button
} from "reactstrap";

import apis from '../api/api'

export const Heading = () => {
  const [Appointments,setAppointments] = useState([])
   let sorted = [];
   let arrangedobj=[];
  const getData = async()=>{
  const mydata=   await (await apis.getAppointments()).data;
  for(let i =0;i<mydata.length;i++){
    let currentitem = +mydata[i].time.split(':')[0]+ +(mydata[i].date.split('-')[1]+ mydata[i].date.split('-')[2]);
     sorted.push(currentitem)
  }
  
  sorted =sorted.sort((a,b)=>a-b)
  
let newArr= [];
for(let i =0;i<sorted.length;i++){
   
for(let j =0;j<mydata.length;j++){
 
if(sorted[i]==+mydata[j].time.split(':')[0]+ +(mydata[j].date.split('-')[1]+ mydata[j].date.split('-')[2])){
  newArr.push(mydata[j])
}
arrangedobj= [...new Set(newArr)];


}
 
setAppointments(arrangedobj);
  }
}
  const deleteAppointment = async(id )=>{

   await apis.deleteAppointment(id)
    alert('we delete the Appointment')
    window.location.reload()
  }
 const filterTime = time=>{
if(time.split(':')[0]>12){
  return`${+time.split(':')[0] -12 +":"+time.split(':')[1]} Pm`
}else if(+time.split(':')[0]===12){
 return `${+time.split(':')[0] +":"+time.split(':')[1]} Pm`
}else{
  return`${time} Am`
}
  }
  return (
    <>
    <Navbar color="dark" dark style={{marginBottom:"32px"}}>
      <Container>
        <NavbarBrand href="/"></NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary " style={{marginRight:"10px"}} to="/add">Add Appointment</Link>
            <Button onClick={() =>getData()} color="danger">Refresh Appointments</Button>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
        {  Appointments.length > 0 ?
               <div style={{ maxWidth: "52rem", display:'flex',justifyContent:'space-around',margin:'0 0 24px 0' }} >

 <h5 style={{letterSpacing:'1px',fontSize:'20px'}} > Property Type. </h5>
 <h5 style={{letterSpacing:'1px',fontSize:'20px'}} > Property No. </h5>
 <h5 style={{letterSpacing:'1px',fontSize:'20px'}}> Appointment Time.  </h5>
 <h6 style={{letterSpacing:'1px',fontSize:'20px'}}> Appointmnt Date. </h6>
     </div>
  :<div></div>
 }

     {Appointments.map(user => (
              <section key={Math.random()} style={{height:'50px',display:'flex',justifyContent:'space-around',maxWidth:'62rem',}}>
          <p style={{width:"150px",textAlign:'center',marginLeft:'0'}} >   <strong>{user.propertytype}</strong></p> &nbsp;&nbsp;&nbsp;
             <p style={{width:"150px",textAlign:'center',marginLeft:'32px'}}  >  <strong>{user.propertyno}</strong> </p>&nbsp;&nbsp;&nbsp;
             <p style={{width:"150px",textAlign:'center',marginLeft:'32px'}}><strong>{filterTime(user.time)} </strong></p>&nbsp;&nbsp;&nbsp;
             <p style={{width:"150px",textAlign:'center',marginLeft:'78px'}} ><strong>{user.date.split('-').reverse().join('-')}</strong></p> <div className="mx-auto">

                 <Link to={`/edit/${user._id}`} color="warning" className="btn btn-warning mr-5">Edit</Link>
                <Button onClick={() => deleteAppointment(user._id)} color="danger">Delete</Button> 
              </div>
              
            
              </section>
         ))} 

    </>
  )
}
