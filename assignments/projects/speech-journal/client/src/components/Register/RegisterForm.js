import React from 'react'
import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


const RegisterForm = ({ handleChange, handleRegister, firstName, username, password, authErr }) => {
  return (
    <div className="page d-flex justify-content-center align-items-center">
      <Form className="register-signin bg-info text-center rounded" onSubmit={handleRegister}>
        <h1>Register</h1>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input 
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input 
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input 
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange} />
        </FormGroup>
        <Button>Register</Button>
        <Link className="d-block" to="/signin">Already Registered?</Link>
        <p>{authErr}</p>
      </Form>
    </div>
  )
}

export default RegisterForm
