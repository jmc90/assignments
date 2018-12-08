import React from 'react'

const BountyItem = ({ firstName, lastName, living, bountyAmount, type, id, handleDelete }) => {
    
    let livingStatus
    if (living) {
        livingStatus = "Alive"
    } else {
        livingStatus = "Dead"
    }

  return (
    <div>
        <h1>{firstName} {lastName}</h1>
        <h3>{livingStatus}</h3>
        <h3>{bountyAmount}</h3>
        <h3>{type}</h3>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default BountyItem
