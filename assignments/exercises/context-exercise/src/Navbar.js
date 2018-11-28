import React from 'react'
import { withTheme } from './ThemeProvider'

const Navbar = (props) => {
  return (
    <div className={`navbar ${props.theme}-nav`}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  )
}

export default withTheme(Navbar)
