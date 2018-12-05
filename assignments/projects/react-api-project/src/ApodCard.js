import React from 'react'

const ApodCard = ({ apodData }) => {
    const {title,
        url,
        hdurl,
        explanation,
        date,
        media_type
                    } = apodData
    
  return (
      media_type === "image" ?
        <div className="image-card d-flex flex-column align-items-center">
            <h3 className="text-center">Date: {date}</h3>
            <h1 className="text-center">{title}</h1>
            <a href={hdurl}><img className="img-fluid" src={url} alt={title} /></a>
            <p className="text-center">{explanation}</p>
        </div>
        :
        <div className="d-flex flex-column align-items-center">
            <h3 className="text-center">Date: {date}</h3>
            <h1 className="text-center">{title}</h1>
            <div className="embed-responsive embed-responsive-16by9">
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
            <p>{explanation}</p>
        </div>
  )
}

export default ApodCard
