import React from 'react'
import { withRover } from '../../context/RoverProvider'
import RoverImage from './RoverImage'
import { Button } from 'reactstrap'
import alien from '../../styles/images/alien.jpeg'

const RoverList = ({ roverPhotos, noPhotos, handleMoreClick }) => {
    return (
        !roverPhotos.length  && noPhotos 
            ? <div className="container rover-list">
                <div className="row justify-content-center">
                    <h1 className="col-12 text-center">No Photos Available for this Sol</h1>
                    <img src={alien} alt="alien" />
                </div>
            </div>
            : roverPhotos.length 
            ?
            <div className="container rover-list">
                <div className="row justify-contnent-center">
                    {roverPhotos.map((photo, i) =>
                        <RoverImage
                            url={photo.img_src}
                            key={i} />)} 
                </div>
                <Button className="my-3" color="primary" size="lg" block onClick={handleMoreClick}>More..</Button>
            </div>
            :
            <div className="container rover-list">
                <div className="row">
                    <h1>Loading...</h1>
                </div>
            </div>

    )
}

export default withRover(RoverList)
