import React from 'react'
import { withTheme } from './ThemeProvider'

const Main = (props) => {
  return (
    <div>
      <h1>Click the button to toggle the {props.theme === "dark" ? "light" : "dark"} theme!</h1>
      <button>Toggle Theme</button>
    </div>
  )
}

export default withTheme(Main)
