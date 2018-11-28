import React from 'react'
import { withTheme } from './ThemeProvider'

const Footer = (props) => {
  return (
    <div className={`${props.theme}-footer footer`}>
      <p>This is a footer I guess</p>
    </div>
  )
}

export default withTheme(Footer)
