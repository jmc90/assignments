import React, { Component } from 'react';
import Form from './Form'
import Badge from './Badge'

class App extends Component {
  constructor(){
    super()
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phone: '',
        favoriteFood: '',
        about: '',
        badge: {
          firstName: '',
          lastName: '',
          email: '',
          placeOfBirth: '',
          phone: '',
          favoriteFood: '',
          about: ''
        }
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
  })
  }

  
// continue here
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const {firstName, lastName, email, placeOfBirth, phone, favoriteFood, about} = this.state
    const {badge} = this.state.badge
    return (
      <div>
        <Form 
          firstName={firstName}
          lastName={lastName}
          emai={email}
          placeOfBirth={placeOfBirth}
          phone={phone}
          favoriteFood={favoriteFood}
          about={about}
          handleChange={this.handleChange} />
        <Badge />
      </div>
    );
  }
}

export default App;



