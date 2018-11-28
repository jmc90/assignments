import React from 'react'

const Box = ({color}) => {
  return (
    <div style={{width: 200, height: 200, backgroundColor: `#${color}`}}>
      <h2>Random color box</h2>
    </div>
  )
}

export default Box
