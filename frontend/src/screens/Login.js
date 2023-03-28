import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../components/Navbar';
function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: ""});
  let  navigate=useNavigate();
  const handlesubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/loginuser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:credentials.email,password:credentials.password})
      })
      const json=await response.json();
      console.log(json)
      if(!json.success){
          alert("valid credetials")
      }
      if(json.success){
        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authtoken",json.authtoken);
        // console.log(localStorage.getItem("authtoken"))
        // console.log(localStorage.getItem("userEmail"))
        navigate('/');
    }
  }
  const onchange = (event) => {
      setcredentials({ ...credentials, [event.target.name]:event.target.value })
      // console.log(event.target.name)
  }

  return (
    <div>
        <div><Navbar/></div>
   
    <div className='container m-5'>
        
    <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={credentials.email} onChange={onchange} />
            <Form.Text className="text-muted">
                Example:-abc123@abc.com
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={credentials.password} onChange={onchange} />
        </Form.Group>
        <Button variant="primary" className='m-3 btn btn-success' type="submit">
            Login
        </Button>
        <Link to='/createuser' className='m-2 btn btn-danger'>New user</Link>
    </Form>

</div>
</div>
  )
}

export default Login