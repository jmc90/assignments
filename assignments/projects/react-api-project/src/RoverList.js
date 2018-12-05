import React from 'react'
import RoverImage from './RoverImage'
import alien from './styles/images/alien.jpeg'

const RoverList = ({ roverPhotos, noPhotos }) => {
    return (
        !roverPhotos.length  && noPhotos 
            ? <div>
                <h1>No Photos Available for this Sol</h1>
                <img src={alien} alt="alien"/>
            </div>
            : roverPhotos.length 
            ?
            <div>
                {roverPhotos.map(photo =>
                    <RoverImage
                        url={photo.img_src}
                        key={photo.id} />)}
            </div>
            :
            <div>
                <h1>Loading...</h1>
            </div>

    )
}

export default RoverList
