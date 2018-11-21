import React from 'react'

const Buttons = ({handleClick, handleClick2, handleClick3, handleClick4}) => {
  return (
    <div>
      <button onClick={handleClick}>Press Me</button>
      <button onClick={handleClick2}>Press Me2</button>
      <button onClick={handleClick3}>Press Me3</button>
      <button onClick={handleClick4}>Press Me4</button>
    </div>
  )
}

export default Buttons
