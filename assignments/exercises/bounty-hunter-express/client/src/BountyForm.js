import React from 'react'

const BountyForm = (props) => {
    

        const {firstName, lastName, bountyAmount, living, type, handleSubmit, handleChange} = props
        return (
            <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleChange} />
                  <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleChange}/>
                  <input type="radio" name="living" value="alive" onChange={handleChange} checked={living === true}  /> Alive
                  <input type="radio" name="living" value="dead" onChange={handleChange}  checked={living === false} /> Dead
                  <input type="number" name="bountyAmount" value={bountyAmount} placeholder="Bounty Amount" onChange={handleChange}/>
                  <select name="type" value={type} onChange={handleChange}>
                    <option value="Sith">Sith</option>
                    <option value="Jedi">Jedi</option>
                </select>
                  <button>Submit</button>
              </form>
            </div>
          )
  
}

export default BountyForm
