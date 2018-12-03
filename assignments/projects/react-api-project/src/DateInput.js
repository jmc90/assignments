import React from 'react'

const DateInput = ({ handleChange }) => {
  return (
    <div>
      <form>
          <input type="date" name="date" onChange={handleChange} />
          
      </form>
    </div>
  )
}

export default DateInput
