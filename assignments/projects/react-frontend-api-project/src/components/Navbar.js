import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/main">Daily Picture</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar
