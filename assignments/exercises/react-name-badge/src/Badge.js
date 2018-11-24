import React from 'react'

const Badge = ({ badges }) => {

    const mappedBadeges = badges.map(badge => {
        return (
            <div className="badge-div">
                <div className="badge-header">
                    <h2>Badge:</h2>
                </div>
                <div className="badge-text-div">
                    <h4 className="badge-text">Name: {badge.firstName} {badge.lastName}</h4>
                    <h4 className="badge-text">Phone: {badge.phone}</h4>
                </div>
                <div className="badge-text-div">
                    <h4 className="badge-text">Place of Birth: {badge.placeOfBirth}</h4>
                    <h4 className="badge-text">Favorite Food: {badge.favoriteFood}</h4>
                </div>
                <div className="badge-text-div">
                    <h4>E-mail: {badge.email}</h4>
                </div>
                <div className="badge-about-div">
                    <p className="badge-about"><strong>About:</strong> {badge.about}</p>
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
