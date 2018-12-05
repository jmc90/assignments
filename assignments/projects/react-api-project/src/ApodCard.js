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
            <h3 className="">Date: {date}</h3>
            <h1 className="">{title}</h1>
            <a href={hdurl}><img className="img-fluid" src={url} alt={title} /></a>
            <p className="text-center">{explanation}</p>
        </div>
        :
        <div>
            <h3>Date: {date}</h3>
            <h1>{title}</h1>
            <iframe
                allowFullScreen
                title= "apod video"
                frameBorder="0"
                height="520"
                width="720"
                src={url}>
            </iframe>
            <p>{explanation}</p>
        </div>
  )
}

export default ApodCard
