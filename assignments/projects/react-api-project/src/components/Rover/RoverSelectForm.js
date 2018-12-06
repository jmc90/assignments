import React from 'react'
import { withRover } from '../../context/RoverProvider'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const RoverSelectForm = ({ handleChange, handleSubmit }) => {
    return (
        <div className="row d-flex justify-content-center m-3">
            <Form onSubmit={handleSubmit} inline>
                <FormGroup>
                    <Label className="ml-2" for="rover">Rover:</Label>
                    <Input className="m-2" type="select" name="rover" onChange={handleChange}>
                        <option value="Curiosity">Curiosity</option>
                        <option value="Opportunity">Opportunity</option>
                        <option value="Spirit">Spirit</option>
                    </Input>
                    <Label className="m-2" for="sol">Martian Day (sol): (Enter value between 1000-5000) </Label>
                    <Input
                        className="m-2"
                        size="500"
                        onChange={handleChange}
                        name="sol"
                        type="number"
                        min="1000"
                        max="5000"
                        placeholder="1000"
                        required />
                    <Button className="m-2" color="primary">Submit</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    )
}

export default withRover(RoverSelectForm)
