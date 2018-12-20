import React, { Component } from 'react'
import { withUser } from '../context/UserProvider'
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
        <RegisterForm />
      </div>
    )
  }
  
}

export default withUser(Register)
