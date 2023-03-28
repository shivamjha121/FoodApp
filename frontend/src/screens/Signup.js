import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const json=await response.json();
        console.log(json)
        if(!json.success){
            alert("valid credetials")
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

                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" name='name' value={credentials.name} onChange={onchange} />
                </Form.Group>
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
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="address" name='geolocation' value={credentials.geolocation} onChange={onchange} />
                </Form.Group>
                <Button variant="primary" className='m-3 btn btn-success' type="submit">
                    Signup
                </Button>
                <Link to='/login' className='m-2 btn btn-danger'>Already a user</Link>
            </Form>

        </div>
        </div>
    )
}

export default Signup

