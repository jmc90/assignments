import React, {Component} from 'react'
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
  
  render() {
    return (
      <div>
        <SignInForm />
      </div>
    )
  }
  
}

export default SignIn
