import React from 'react'

const Buttons = ({handleClick, handleClick2}) => {
  return (
    <div>
      <button onClick={handleClick}>Press Me</button>
      <button onClick={handleClick2}>Press Me2</button>
    </div>
  )
}

export default Buttons
