import React from 'react'
import { Link } from "react-router-dom";


const SignInForm = ({handleChange, handleSignIn, username, password}) => {
  return (
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
            type="password"
            name="password"
            value={password} 
            placeholder="Password"
            onChange={handleChange} />               
            <button>Sign In</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default SignInForm
