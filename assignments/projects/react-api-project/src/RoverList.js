import React from 'react'
import RoverImage from './RoverImage'
import { Button } from 'reactstrap'
import alien from './styles/images/alien.jpeg'

const RoverList = ({ roverPhotos, noPhotos, handleMoreClick }) => {
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
                    {roverPhotos.map((photo, i) =>
                        <RoverImage
                            url={photo.img_src}
                            key={i} />)} 
                </div>
                <Button className="my-3" color="primary" size="lg" block onClick={handleMoreClick}>More..</Button>
            </div>
            :
            <div>
                <h1>Loading...</h1>
            </div>

    )
}

export default RoverList
