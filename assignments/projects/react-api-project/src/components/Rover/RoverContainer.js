import React, { Component } from 'react'
import { withRover } from '../../context/RoverProvider'
import RoverList from './RoverList'
import RoverSelectForm from './RoverSelectForm'

class RoverContainer extends Component {
    
    componentDidMount() {
        this.props.getData()
    }

    render() {
        return (
            <div className="rover-container">
                <RoverSelectForm />
                <RoverList />
            </div>
        )
    }
}

export default withRover(RoverContainer)
