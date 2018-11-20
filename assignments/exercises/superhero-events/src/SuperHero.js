import React from 'react'

const SuperHero = ({name, image, handleClick, catchPhrase}) => {
  return (
    <div onClick={() => { handleClick(catchPhrase) }}>
      <h1>{name}</h1>
      <img src={image} alt="hero" width="300px" height="400px" />
    </div>
  )
}

export default SuperHero

