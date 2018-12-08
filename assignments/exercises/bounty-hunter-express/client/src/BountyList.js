import React from 'react'
import BountyItem from './BountyItem';
import BountyItem

const BountyList = ({firstName, lastName, living, bountyAmount, type}) => {
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
    </div>
  )
}

export default BountyList
