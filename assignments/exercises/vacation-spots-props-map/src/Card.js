import React from 'react'


const Card = ({place, price, season, image}) => {

    const setBackground = (input) => {
        if (input === "Summer") {
            return "bg-dark-red"
        } else if (input === "Winter") {
            return "bg-light-blue"
        } else if (input === "Fall") {
            return "bg-gold"
        } else if (input === "Spring") {
            return "bg-light-green"
        }
    }

    const pricePoint = (amount) => {
        if (amount < 500) {
            return "$"
        } else if (amount < 1000) {
            return "$$"
        } else {
            return "$$$"
        }
    }

    return (
      <div className={`${setBackground(season)} mw6 tc dib br3 pa3 ma3 grow bw2 shadow-5`}>
          <img src={image} alt="destination" width="350px" height="300px"/>
          <h1>Destination: {place}</h1>
          <h2>{pricePoint(price)}</h2>
          <h2>Package Price: ${price}</h2>
          <p><strong>Best time to go: {season}</strong> </p>
      </div>
    )
}

export default Card