import React from 'react'
import BountyItem from './BountyItem'


const BountyList = ({ bounties, handleDelete, handleEdit}) => {
    
    const mappedBountyItem = bounties.map(b => 
        <BountyItem 
          bounties = {bounties}
          firstName={b.firstName}
          lastName={b.lastName}
          living={b.living}
          bountyAmount={b.bountyAmount}
          type={b.type}
          id={b._id}
          key={b._id}
          handleDelete={handleDelete}
          handleEdit={handleEdit} />)

  return (
    <div>
      {mappedBountyItem}
    </div>
  )
}

export default BountyList
