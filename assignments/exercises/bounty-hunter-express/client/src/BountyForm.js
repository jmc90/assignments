import React, { Component } from 'react'

class BountyForm extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const {firstName, lastName, bountyAmount, type, handleSubmit, handleChange} = this.props
        return (
            <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleChange} />
                  <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleChange}/>
                  <input type="radio" name="living" value="alive" onChange={handleChange}  /> Alive
                  <input type="radio" name="living" value="dead" onChange={handleChange} /> Dead
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
  
}

export default BountyForm
