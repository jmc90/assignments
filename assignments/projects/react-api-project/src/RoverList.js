import React from 'react'
import RoverImage from './RoverImage'
import { Button } from 'reactstrap'
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
            <div className="container">
                <div className="row justify-contnent-center">
                    {roverPhotos.map(photo =>
                        <RoverImage
                            url={photo.img_src}
                            key={photo.id} />)} 
                </div>
                <Button color="primary" size="lg" block>More..</Button>
            </div>
            :
            <div>
                <h1>Loading...</h1>
            </div>

    )
}

export default RoverList
