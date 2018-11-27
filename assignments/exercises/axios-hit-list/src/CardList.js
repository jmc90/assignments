import React from 'react'
import Card from './Card'

const CardList = ({ hitList }) => {
    const mappedHitList = hitList.map(person =>
        <Card
            name={person.name}
            image={person.image} />)
    return (
        <div className="card-list">
            {mappedHitList}
        </div>
    )
}

export default CardList
