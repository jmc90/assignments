import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import RegisterForm from './RegisterForm'

class Register extends Component  {
  constructor() {
    super() 
    this.state = {
      firstName: "",
      username: "",
      password: ""
    }
  }
  
  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleRegister = e => {
    e.preventDefault()
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName
    }
    this.props.register(userInfo)
    this.setState({
      firstName: "",
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <div>
        <RegisterForm
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          firstName={this.state.firstName}
          username={this.state.username}
          password={this.state.password}
          authErr={this.props.authErr} />
      </div>
    )
  }
  
}

export default withUser(Register)
