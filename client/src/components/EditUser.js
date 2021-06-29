import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import Paragraph from '../components/Paragraph'
import apis  from '../api/api';
export const EditUser = (props) => {
  const currentUserId = props.match.params.id;
  const history = useHistory();
  const [data, setData] = useState({
    id: currentUserId,
    propertytype: '',
    propertyno:'',
    time:'',
    date:'',
    
  })

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
  e.preventDefault();
  const  {propertytype,propertyno,time,date}=data
  const payload ={propertytype,propertyno,time,date} ;
  await apis.updateAppointment(data['id'],payload)
    history.push("/app")
    alert('update appointment')

  }

  return (
    <>
    <Paragraph ></Paragraph>

    <Form onSubmit={onSubmit} >
      <div className="d-flex">

      <FormGroup className="col-6" >
        <Label className="text-muted mb-2" >Property Type :</Label>
        <Input type="select"
 name="propertytype" placeholder="Enter Property Type" onChange={(e)=>onChange(e)} required>
       <option>Choose Item </option>
       <option>DL</option>
          <option>DU</option>
          <option>ML</option>
          <option>MU</option>
          
 </Input>
      </FormGroup>
  
      <FormGroup className="col-md-6">
        <Label className="text-muted mb-2">Prop No.:</Label>
        <Input type="text" 
      
         name="propertyno" placeholder="Enter Property No." 
         onChange={(e)=>onChange(e)}
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
          onChange={(e)=>onChange(e)}
          required
        />
      </FormGroup>
  
      <FormGroup>
        <Label className="text-muted mb-2">Date:</Label>
        <Input type="date" className="mb-2"  
     
        name="date" placeholder="Enter Date Of Appointment" 
        onChange={(e)=>onChange(e)}
        required></Input>
      </FormGroup>
      <Button type="submit" >Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </>
  )
}
