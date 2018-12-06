import React from 'react'
import { withRover } from '../../context/RoverProvider'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const RoverSelectForm = ({ handleChange, handleSubmit }) => {
    return (
        <div className="d-flex justify-content-center mb-3">
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

export default withRover(RoverSelectForm)
