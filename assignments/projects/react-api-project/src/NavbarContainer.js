import React from 'react'
import { Link } from "react-router-dom"

const NavbarContainer = () => {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/apod">APOD</Link>
        <Link to="/rovergallery">Rover Gallery</Link>

    </div>
  )
}

export default NavbarContainer
