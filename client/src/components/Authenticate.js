import react,{useState,useRef} from 'react'
import { useHistory } from "react-router-dom";
import apis from '../api/api';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";
import { set } from 'mongoose';

const AuthenticateUser =  ()=>{

    const[credential,setCredential]=useState({
        username:'',
        password:'',
    });
    const Pref= useRef();
    const [isAuth,setIsauth] = useState(false);
    const history = useHistory();
    const  onchange  =(e)=>{
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    const onsubmit= async (e)=>{
          e.preventDefault();
          const {username,password} = credential;
          const payload = {username,password}
          await  apis.Authenticate(payload).then(res => res.data.auth ? setIsauth(!isAuth) : setIsauth(res.data.auth))
          
          if(isAuth) history.push('/app')
          else{
              console.log(Pref.curr)
          }
    }
    return(
        <div style={{width:"100%",height:'100vh'}} className="d-flex justify-content-center Align-items-center flex-column">
            <h2 style={{margin:'32px auto 0 auto'}}>Appointment App</h2>
<Form onSubmit={onsubmit} style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}} >
<FormGroup className="col-md-6 mb-3">
<Label className="text-muted mb-2">UserName:</Label>
<Input type="text" v name="username" onChange={onchange} placeholder="Enter UserName" required></Input>

</FormGroup>
<FormGroup className="col-md-6 mb-3">
<Label className="text-muted mb-2">PassWord:</Label>
<Input type="password"  name="password" placeholder="Enter PassWord" onChange={onchange} required></Input>
</FormGroup>
<p className="text-danger" ref={Pref} style={{display:'none'}}>UserName Or Password Not Correct Please try Again</p>
<Button type="submit" className="mt-3">Submit</Button>
</Form>
</div>
    )
}

export default AuthenticateUser