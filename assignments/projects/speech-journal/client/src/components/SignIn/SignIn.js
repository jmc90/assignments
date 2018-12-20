import React, { Component } from 'react'
import { withUser } from '../context/UserProvider'
import SignInForm from './SignInForm'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSignIn = e => {
    e.preventDefault()
    const userInfo = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.signIn(userInfo)
    this.setState({
      username: '',
      password: ''
    })
  }
  
  render() {
    return (
      <div>
        <SignInForm
          handleChange={this.handleChange}
          handleSignIn={this.handleSignIn}
          username={this.username}
          password={this.password} />
      </div>
    )
  }
  
}

export default withUser(SignIn)
