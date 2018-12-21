import React from 'react'
import { Link } from "react-router-dom"


const SignInForm = ({ handleChange, handleSignIn, username, password, authErr }) => {
  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
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
          <button>Sign In</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
      <p>{authErr}</p>
    </div>
  )
}

export default SignInForm
