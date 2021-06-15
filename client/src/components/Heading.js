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

  const getData = async()=>{
 const mydata=   await (await apis.getAppointments()).data;
setAppointments(mydata);
  }
  return (
    <>
    <Navbar color="dark" dark style={{marginBottom:"32px"}}>
      <Container>
        <NavbarBrand href="/">Dubai Properties</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary " style={{marginRight:"10px"}} to="/add">Add Appointment</Link>
            <Button onClick={() =>getData()} color="danger">Refresh Appointments</Button>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
        {  Appointments.length > 0 ?
               <div style={{ maxWidth: "44rem", display:'flex',justifyContent:'space-around',margin:'0 auto 24px auto' }} >
 <h6>Property Type  </h6>
 <h6> Property No. </h6>
 <h6>Time of Appointment  </h6>
 <h6> Date of Appointmnt  </h6>
     </div>
  :<div></div>
 }

     {Appointments.map(user => (
              <section key={Math.random()} style={{height:'50px',display:'flex',justifyContent:'space-around'}}>
          <p style={{width:"150px",textAlign:'center',marginLeft:'130px'}} >   <strong>{user.propertytype}</strong></p> &nbsp;&nbsp;&nbsp;
             <p style={{width:"150px",textAlign:'center',}}  >  <strong>{user.propertyno}</strong> </p>&nbsp;&nbsp;&nbsp;
             <p style={{width:"150px",textAlign:'center',}}>  <strong>{+user.time.split(':')[0]>12 ?`${+user.time.split(':')[0] -12 +":"+user.time.split(':')[1]} Pm`:`${user.time} Am` }</strong> </p>&nbsp;&nbsp;&nbsp;
             <p style={{width:"150px",textAlign:'center',}} ><strong>{user.date}</strong></p>              <div className="mx-auto">
                {/* <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-5">Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button> */}
              </div>
           
              </section>
         ))} 

    </>
  )
}
