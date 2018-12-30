import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import SignInForm from './SignInForm'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    }
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  clearInputs = () => {
    this.setState({
        username: "",
        password: "",
        errorMessage: ""
    })
  }

  handleSignIn = e => {
    e.preventDefault()
    const userInfo = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.signIn(userInfo)
      .then(() => this.props.history.push("/journal"))
      .catch(err => {
        this.setState({errorMessage: err.response.data.errMsg})
      })
    this.clearInputs()
  }
  
  render() {
    return (
      <div>
        <SignInForm
          handleChange={this.handleChange}
          handleSignIn={this.handleSignIn}
          username={this.state.username}
          password={this.state.password}
          errorMessage={this.state.errorMessage} />
      </div>
    )
  }
  
}

export default withUser(SignIn)
