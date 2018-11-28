import React from 'react'
import { withTheme } from './ThemeProvider'

const Header = (props) => {
  return (
        <div className={`${props.theme}-header`}>
            <h1>My Context Header</h1>
            <button onClick={props.toggleTheme}>{props.theme === "dark" ? "Switch to light" : "Switch to dark"}</button>
        </div>

  )
}

export default withTheme(Header)
