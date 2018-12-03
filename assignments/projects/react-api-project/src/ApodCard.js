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
        <div>
            <h1>{title}</h1>
            <a href={hdurl}><img src={url} alt={title} /></a>
            <p>{explanation}</p>
            <span>{date}</span>
        </div>
        :
        <div>
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
            <span>{date}</span>
        </div>
  )
}

export default ApodCard
