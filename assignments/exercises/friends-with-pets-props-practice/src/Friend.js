import React from 'react'
import Pet from './Pet.js'

const Friend = ({name, age, pets}) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Age: {age}</h3>
            <div>
            <h4>Pets:</h4>
            {pets.map(pet => 
                <Pet 
                    name={pet.name}
                    breed={pet.breed} /> )}
            </div>
        </div>
    )
}

export default Friend