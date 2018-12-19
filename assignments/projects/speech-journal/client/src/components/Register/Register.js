import React, {Component} from 'react'
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
  
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    )
  }
  
}

export default Register
