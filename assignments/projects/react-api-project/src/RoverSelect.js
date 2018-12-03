import React from 'react'

const RoverSelect = ({ handleChange, handleSubmit }) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select name="rover" onChange={handleChange}>
                <option value="Curiosity">Curiosity</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Spirit">Spirit</option>
            </select>
            <span>Martian Day (sol): </span>
            <input
                style={{width: 200}}
                onChange={handleChange}
                name="sol" 
                type="number" 
                min="1000"
                max="2000"
                placeholder="Enter value between 1000-2000"
                required />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default RoverSelect
