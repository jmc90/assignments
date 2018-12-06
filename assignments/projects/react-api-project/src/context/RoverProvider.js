import React, { Component } from 'react'
import axios from 'axios'

export const { Provider, Consumer } = React.createContext()

const API_KEY = process.env.REACT_APP_NASA_API_KEY

export default class RoverProvider extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    
    render(){
        return (
            <Provider value={{
                
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withRover = C => props => (
    <Consumer>
        {value => <C {...props} {...value}/>}
    </Consumer>
)