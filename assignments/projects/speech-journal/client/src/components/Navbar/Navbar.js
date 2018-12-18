import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Landing Page</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/register">Register</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/entryhistory">View Entries</Link>
    </div>
  )
}

export default Navbar
