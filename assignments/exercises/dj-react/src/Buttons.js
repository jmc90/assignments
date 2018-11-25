import React from 'react'

const Buttons = ({handleClick, handleClick2, handleClick3, handleClick4, handleClick5, handleClick6, handleClick7, handleClick8}) => {
  return (
    <div>
      <button onClick={handleClick}>Press Me</button>
      <button onClick={handleClick2}>Press Me2</button>
      <button onClick={handleClick3}>Press Me3</button>
      <button onClick={handleClick4}>Press Me4</button>
      <button onClick={handleClick5}>Press Me5</button>
      <button onClick={handleClick6}>Press Me6</button>
      <button onClick={handleClick7}>Press Me7</button>
      <button onClick={handleClick8}>Press Me8</button>
    </div>
  )
}

export default Buttons
