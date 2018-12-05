import React from 'react'
import RoverImage from './RoverImage'
import alien from './styles/images/alien.jpeg'

const RoverList = ({ roverPhotos }) => {
    return (

        // not able to show messages when no pictures are available because it will show during loading time. FIX THIS!!!!!!!
        roverPhotos.length ? 
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
