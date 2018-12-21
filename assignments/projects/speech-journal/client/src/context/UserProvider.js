import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

class UserProvider extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      isAuthenticated: false,
      authErr: ''
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
      .catch(err => this.handleError(err.response.data.errMsg))
  }

  signIn = userInfo => {
    axios.post('/auth/signin', userInfo).then(res => {
      localStorage.setItem("user", JSON.stringify(res.data))
      this.setState({
        user: res.data,
        isAuthenticated: true
      })
    })
      .catch(err => this.handleError(err.response.data.errMsg))
  }

  handleError = err => {
    this.setState({
      authErr: err
    })
  }

  logOut = () => {
    localStorage.removeItem("user")
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

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          isAuthenticated: this.state.isAuthenticated,
          authErr: this.state.authErr,
          register: this.register,
          signIn: this.signIn,
          logOut: this.logOut,
          handleError: this.handleError,
          verify: this.verify,

        }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider


export const withUser = C => props => (
  <UserContext.Consumer>
    {value => <C {...props} {...value} />}
  </UserContext.Consumer>
)