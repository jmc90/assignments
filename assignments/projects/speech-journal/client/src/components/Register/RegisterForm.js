import React from 'react'
import { Link } from "react-router-dom"

const RegisterForm = ({handleChange, handleRegister, firstName, username, password}) => {
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <input 
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name" 
                onChange={handleChange} />
            <input 
                type="text"
                name="username"
                value={username}
                placeholder="Username"  
                onChange={handleChange} />
            <input 
                type="password"
                name="password"
                value={password} 
                placeholder="Password" 
                onChange={handleChange} />
            <button>Register</button>
        </form>
        <Link to="/signin">Sign In</Link>
    </div>
  )
}

export default RegisterForm
