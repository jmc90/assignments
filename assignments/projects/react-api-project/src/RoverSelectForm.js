import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const RoverSelectForm = ({ handleChange, handleSubmit }) => {
    return (
        <div className="d-flex justify-content-center mb-3">
            {/* <form onSubmit={handleSubmit}>
                <select name="rover" onChange={handleChange}>
                    <option value="Curiosity">Curiosity</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Spirit">Spirit</option>
                </select>
                <span>Martian Day (sol): </span>
                <input
                    style={{ width: 200 }}
                    onChange={handleChange}
                    name="sol"
                    type="number"
                    min="1000"
                    max="5000"
                    placeholder="Enter value between 1000-5000"
                    required />
                <button>Submit</button>
            </form> */}
            <Form onSubmit={handleSubmit} inline>
                <FormGroup>
                    <Label for="rover">Rover:</Label>
                    <Input className="mx-2" type="select" name="rover" onChange={handleChange}>
                        <option value="Curiosity">Curiosity</option>
                        <option value="Opportunity">Opportunity</option>
                        <option value="Spirit">Spirit</option>
                    </Input>
                    <Label className="mx-2" for="sol">Martian Day (sol): (Enter value between 1000-5000) </Label>
                    <Input
                        className="mx-2"
                        onChange={handleChange}
                        name="sol"
                        type="number"
                        min="1000"
                        max="5000"
                        placeholder="Enter Number"
                        required />
                    <Button color="primary">Submit</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    )
}

export default RoverSelectForm
