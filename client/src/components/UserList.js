// import React, { useContext,useState } from 'react';
// import { GlobalContext } from "../context/GlobalState";
// import { Link } from "react-router-dom";
// import apis from '../api/api'
// import {
//   ListGroup,
//   ListGroupItem,
//   Button
// } from "reactstrap";


// export const UserList = () => {
//  // const { users, removeUser } = useContext(GlobalContext);


//   return (
//     <ListGroup className="mt-4">
//       {  users.length > 0 ?
//               <div style={{ maxWidth: "44rem", display:'flex',justifyContent:'space-between',marginBottom:'16px' }} >
// <h6>Property Type  |</h6>
// <h6> Property No. |</h6>
// <h6>Time of Appointment  |</h6>
// <h6> Date of Appointmnt  |</h6>
//     </div>
//     :<div></div>
// }
    
//         <>
        
//           {users.map(user => (
//              <section key={Math.random()} style={{width:'911px',height:'50px',display:'flex',justifyContent:'space-around'}}>
//           <p style={{flexBasis:'20%'}}>   <strong>{user.propertytype}</strong></p> &nbsp;&nbsp;&nbsp;
//             <p style={{flexBasis:'20%'}}>  <strong>{user.propertyno}</strong> </p>&nbsp;&nbsp;&nbsp;
//             <p style={{flexBasis:'20%'}}>  <strong>{+user.time.split(':')[0]>12 ?`${+user.time.split(':')[0] -12 +":"+user.time.split(':')[1]} Pm`:`${user.time} Am` }</strong> </p>&nbsp;&nbsp;&nbsp;
//              <p style={{flexBasis:'20%'}}><strong>{user.date}</strong></p>
//               <div className="mx-auto">
//                 <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-5">Edit</Link>
//                 <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
//               </div>
           
//               </section>
//           ))}
//         </>

   
//     </ListGroup>
//   )
// }
