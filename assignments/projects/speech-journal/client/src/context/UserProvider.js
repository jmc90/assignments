import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            isAuthenticated: false
        }
    }

    render(){
        return (
            <UserContext.Provider
                value={{
                    
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider


export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value}/> }
    </UserContext.Consumer>
)