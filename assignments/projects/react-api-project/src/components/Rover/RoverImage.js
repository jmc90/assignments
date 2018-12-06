import React from 'react'
import { withRover } from '../../context/RoverProvider'
import ModalImage from 'react-modal-image'

const RoverImage = ({url}) => {
  return (
    <div className="col-12 col-md-4 col-lg-3 text-center rover-image-div">
        <ModalImage
          className="my-2 img-thumbnail mars-img"
          small={url}
          large={url}
          alt="Mars Photo"
        />
    </div>
  )
}

export default withRover(RoverImage)
