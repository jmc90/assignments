import React from 'react'

const ColorSquares = ({box1, box2, box3, box4}) => {

  return (
    <div id="box-div">
      <div className={`box b1 ${box1}`}></div>
      <div className={`box b2 ${box2}`}></div>
      <div className={`box b3 ${box3}`}></div>
      <div className={`box b4 ${box4}`}> </div>
    </div>
  )
}

export default ColorSquares
