import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { withUser } from '../../context/UserProvider'


const Navbar = (props) => {
  return (
    <div>
      {props.isAuthenticated ? 
        <Fragment>
          <Link to="/journal">Journal</Link>}
          <Link to="/entryhistory">View Entries</Link>
        </Fragment>
        :
        <Fragment>
          <Link to="/">Landing Page</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/register">Register</Link>
        </Fragment>
        }
    </div>
  )
}

export default withUser(Navbar)
