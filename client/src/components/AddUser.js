import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import Paragraph from '../components/Paragraph'
import apis from '../api/api';
export const AddUser = () => {
  const [data, setData] = useState({
    id:uuid(),
    propertytype:'',
    propertyno:'',
    time:'',
    date:''
  });
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit =  async (e) => {
    e.preventDefault();
   const  {propertytype,propertyno,time,date}=data
    const payload ={propertytype,propertyno,time,date} ;
    await apis.addAppointment(payload)
   // addUser(data)

    history.push("/");
  
    alert('we added appointment')

  }



  return (
    <>
    <Paragraph/>
    <h4 className="h4 text-center mb-5 muted">Add Appointment</h4>
    <Form onSubmit={onSubmit} >
      <div className="d-flex">

      <FormGroup className="col-6" >
        <Label className="text-muted mb-2" >Property Type :</Label>
        <Input type="select"  onChange={(e)=>setData({
      ...data,
     propertytype:e.target.value
     })} 
 name="Property type" placeholder="Enter Property Type" required>
       <option>Choose Item </option>
       <option>Dubai Land </option>
          <option>Dubai Properties</option>
          <option>Merras Land</option>
          <option>MErras Units</option>
          
 </Input>
      </FormGroup>
  
      <FormGroup className="col-md-6">
        <Label className="text-muted mb-2">Prop No.:</Label>
        <Input type="text" value={data.propno} 
        onChange={(e)=>setData({...data,propertyno:e.target.value})}
         name="Property No" placeholder="Enter Property No." 
         required></Input>
      </FormGroup>
      </div>
      <FormGroup>
        <Label className="text-muted mb-2">Time:</Label>
        <Input
          type="time"
          name="time"
          id="exampleDatetime"
          placeholder="datetime placeholder"
          onChange={(e)=>setData({...data,time:e.target.value})} 
          required
        />
      </FormGroup>
  
      <FormGroup>
        <Label className="text-muted mb-2">Date:</Label>
        <Input type="date" value={data.date} className="mb-2"  
        onChange={(e)=>setData({...data,date:e.target.value})} 
        name="Date" placeholder="Enter Date Of Appointment" 
        required></Input>
      </FormGroup>
      <Button type="submit" >Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </>
  )
}
