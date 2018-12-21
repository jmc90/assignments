import React from 'react'
import { Link } from "react-router-dom"
import { withUser } from '../../context/UserProvider'


const Navbar = (props) => {
  const { isAuthenticated, logOut } = props
  return (
    <div>
      { !isAuthenticated && <Link to="/">Landing Page</Link>}
      { !isAuthenticated && <Link to="/signin">Sign In</Link>}
      { !isAuthenticated && <Link to="/register">Register</Link>}
      { isAuthenticated && <Link to="/journal">Journal</Link>}
      { isAuthenticated && <Link to="/entryhistory">View Entries</Link>}
      { isAuthenticated && <Link to="/" onClick={logOut}>Logout</Link>}
    </div>
  )
}

export default withUser(Navbar)
