import React from 'react'
import { Link } from "react-router-dom"

const RegisterForm = ({ handleChange, handleRegister, firstName, username, password, authErr }) => {
  return (
    <div>
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
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange} />
          <button>Register</button>
        </form>
        <Link to="/signin">Sign In</Link>
      </div>
      <p>{authErr}</p>
    </div>
  )
}

export default RegisterForm
