import React from 'react'

const Card = ({name, image}) => {
    const style = {
        background: `url(${image}) center center`,
        backgroundSize: 'cover',
        height: 300,
        width: 200,
        display: 'flex',
        alignItems: 'flex-end'
    }
  return (
    <div style={style} className="card">
      <div className="name">
          <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Card
