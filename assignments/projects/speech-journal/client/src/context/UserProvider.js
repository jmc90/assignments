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

    register = userInfo => {
        axios.post('/auth/register', userInfo).then(res => {
            this.setState({
                user: res.data,
                isAuthenticated: true
            })
        })
        .catch(err => console.log(err))
    }

    signIn = userInfo => {
        axios.post('/auth/sigin', userInfo).then(res => {
            this.setState({
                user: res.data,
                isAuthenticated: true
            })
        })
        .catch(err => console.log(err))
    }

    logOut = () => {
        this.setState({
            user: {},
            isAuthenticated: false
        })
    }


    render(){
        return (
            <UserContext.Provider
                value={{
                    user: this.state.user,
                    register: this.register,
                    signIn: this.signin,
                    logOut: this.logOut
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