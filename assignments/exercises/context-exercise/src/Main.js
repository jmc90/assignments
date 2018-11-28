import React from 'react'
import { withTheme } from './ThemeProvider'

const Main = (props) => {
  return (
    <div className={`${props.theme}-main main`}>
      <h1>Click the button to toggle the {props.theme === "dark" ? "light" : "dark"} theme!</h1>
      <button onClick={props.toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default withTheme(Main)
