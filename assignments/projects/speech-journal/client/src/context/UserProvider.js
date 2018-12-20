import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            isAuthenticated: false,
            autherr: ''
        }
    }

    register = userInfo => {
        axios.post('/auth/register', userInfo).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            this.setState({
                user: res.data,
                isAuthenticated: true
            })
        })
        .catch(err => console.log(err))
    }

    signIn = userInfo => {
        axios.post('/auth/sigin', userInfo).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            this.setState({
                user: res.data,
                isAuthenticated: true
            })
        })
        .catch(err => console.log(err))
    }

    handleError = err => {
        this.setState({
            authErr: err
        })
    }

    logOut = () => {
        this.setState({
            user: {},
            isAuthenticated: false
        })
    }

    verify = () => {
        if (localStorage.getItem("user")) {
            this.setState({
                user: JSON.parse(localStorage.getItem("user")),
                isAuthenticated: true
            })
        }
    }

    render(){
        return (
            <UserContext.Provider
                value={{
                    user: this.state.user,
                    isAuthenticated: this.state.isAuthenticated,
                    autherr:this.state.autherr,
                    register: this.register,
                    signIn: this.signin,
                    logOut: this.logOut,
                    handleError: this.handleError,
                    verify: this.verify,
                    
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