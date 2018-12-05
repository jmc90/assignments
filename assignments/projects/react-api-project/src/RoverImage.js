import React from 'react'

const RoverImage = ({url}) => {
  return (
    <div className="col-12 col-md-3 rover-image-div">
        <img src={url} alt="mars pic" className="img-thumbnail"/>
    </div>
  )
}

export default RoverImage
