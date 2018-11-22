import React from 'react'

const Badge = ({firstName, lastName, email, placeOfBirth, phone, favoriteFood, about}) => {
    return (
        <div>
            <h2>Badge:</h2>
            <div>
                <h4>Name: {firstName} {lastName}</h4>
                <h4>Phone: {phone}</h4>
            </div>
            <div>
                <h4>Place of Birth: {placeOfBirth}</h4>
                <h4>Favorite Food: {favoriteFood}</h4>
            </div>
            <div>
                <h4>E-mail: {email}</h4>
            </div>
            <div>
                <p>About: {about}</p>
            </div>
        </div>
    )
}

export default Badge
