import React from 'react'
import { withApod } from '../../context/ApodProvider'

const ApodCard = props => {
    const {title,
            url,
            hdurl,
            explanation,
            date,
            media_type
                    } = props.apodData
    
  return (
    url ?
      media_type === "image" ?
        <div className="image-card d-flex flex-column align-items-center">
            <h3 className="text-center">Date: {date}</h3>
            <h1 className="text-center">{title}</h1>
            <a className="mb-4 shadow" href={hdurl}><img className="img-fluid" src={url} alt={title} /></a>
            <p className="text-center apod-explanation">{explanation}</p>
        </div>
        :
        <div className="d-flex flex-column align-items-center">
            <h3 className="text-center">Date: {date}</h3>
            <h1 className="text-center">{title}</h1>
            <div className="mb-4 shadow embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    allowFullScreen
                    title= "apod video"
                    frameBorder="0"
                    height="520"
                    width="720"
                    src={url}>
                </iframe>
            </div>
            <p className="text-center apod-explanation">{explanation}</p>
        </div>
        :
        <div className="row">
            <h1>Loading...</h1>
        </div>
  )
}

export default withApod(ApodCard)
