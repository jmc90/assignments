import React from 'react'
import { Link } from "react-router-dom";


const SignInForm = () => {
  return (
    <div>
      <form onSubmit={}>
          <input 
            type="text"
            name="username"
            value={}
            placeholder="Username" 
            onChange={} />
          <input 
            type="password"
            name="password"
            value={} 
            placeholder="Password"
            onChange={} />               
            <button>Sign In</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default SignInForm
