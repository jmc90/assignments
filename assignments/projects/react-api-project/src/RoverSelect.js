import React from 'react'

const RoverSelect = ({ handleChange }) => {
  return (
    <div>
        <form>
            <select name="rover" onChange={handleChange}>
                <option value="Curiosity">Curiosity</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Spirit">Spirit</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default RoverSelect
