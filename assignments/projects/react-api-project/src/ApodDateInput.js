import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
    <div className="row justify-content-center text-center">
      {/* <form onSubmit={handleSubmit}>
          <input 
            className="date-select"
            type="date" 
            name="date" 
            value={date}
            onChange={handleChange}
            min="1995-06-16"
            max={today}
            required />
            <Button color="primary">primary</Button>{' '}
      </form> */}
      <Form inline onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleDate" className="mr-sm-2">Date</Label>
          <Input 
            type="date"
            name="date" 
            value={date}
            onChange={handleChange}
            min="1995-06-16"
            max={today}
            required />
            <Button color="primary">Submit</Button>{' '}
          </FormGroup>
        </Form>
    </div>
  )
}

export default ApodDateInput