import React from 'react'
import Card from './Card'


const CardList = ({spots}) => {

    return (
      <div>
        {spots.map(spot => 
            <Card 
                place={spot.place}
                price={spot.price}
                season={spot.timeToGo}
                image={spot.image} />
        )}
        
      </div>
    )
}

export default CardList