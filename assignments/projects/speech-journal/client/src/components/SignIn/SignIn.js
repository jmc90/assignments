import React, {Component} from 'react'
import SignInForm from './SignInForm'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  
  render() {
    return (
      <div>
        <SignInForm />
      </div>
    )
  }
  
}

export default SignIn
