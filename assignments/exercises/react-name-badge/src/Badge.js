import React from 'react'

const Badge = ({ badges }) => {

    const mappedBadeges = badges.map(badge => {
        return (
            <div className="badge-div">
                <h2>Badge:</h2>
                <div>
                    <h4>Name: {badge.firstName} {badge.lastName}</h4>
                    <h4>Phone: {badge.phone}</h4>
                </div>
                <div>
                    <h4>Place of Birth: {badge.placeOfBirth}</h4>
                    <h4>Favorite Food: {badge.favoriteFood}</h4>
                </div>
                <div>
                    <h4>E-mail: {badge.email}</h4>
                </div>
                <div>
                    <p>About: {badge.about}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            {mappedBadeges}
        </div>
    )
}

export default Badge
