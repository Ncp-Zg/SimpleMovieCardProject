import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useFormik } from 'formik'


function SignIn() {
    const Formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        onsubmit:(values)=>{
            console.log(values);
        }
    });
    return (
        <div>
            <Form onSubmit={Formik.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter email"
    onChange={Formik.handleChange}
    value={Formik.values.email} 
    name="email"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
    onChange={Formik.handleChange}
    value={Formik.values.password}
    name = "password"
    />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export {SignIn}
