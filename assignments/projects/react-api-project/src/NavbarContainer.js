import React from 'react'
import { Link } from "react-router-dom"

const NavbarContainer = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/apodContainer">APOD</Link>
    </div>
  )
}

export default NavbarContainer
