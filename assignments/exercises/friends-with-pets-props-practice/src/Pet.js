import React from 'react'

const Pet = ({name, breed}) => {

    return (
        <ul>
            <li>name: {name}</li>
            <li>breed: {breed}</li>
        </ul>
    )
}

export default Pet