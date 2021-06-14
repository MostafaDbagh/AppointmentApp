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

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    type: '',
    propno:'',
    time:'',
    date:''
    
  })
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(selectedUser)
    editUser(selectedUser);
    history.push("/")
  }

  return (
    <>
    <Paragraph ></Paragraph>

    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Property Type</Label>
        <Input type="text"  onChange={onChange} name="type" placeholder="Enter Updated " ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Property NO.</Label>
        <Input type="text"  onChange={onChange} name="propno" placeholder="Enter user" ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Time</Label>
        <Input type="time"  onChange={onChange} name="time" placeholder="Enter user" ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Date</Label>
        <Input type="date" className="mb-2"  onChange={onChange} name="date" placeholder="Enter user" ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </>
  )
}
