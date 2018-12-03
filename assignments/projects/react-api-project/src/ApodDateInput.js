import React from 'react'

const ApodDateInput = ({ handleChange, handleSubmit, date }) => {

  // get correct date format for max date property
  let today = new Date()
  let day = today.getDate()
  let month = today.getMonth()+1
  let year = today.getFullYear()

  if(day < 10){
    day = `0${day}`
    } 
  if(month < 10){
    month = `0${month}`
  } 
  
  today = `${year}-${month}-${day}`

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input 
            type="date" 
            name="date" 
            value={date}
            onChange={handleChange}
            min="1995-06-16"
            max={today}
            required />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default ApodDateInput
