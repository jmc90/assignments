import React, { Component } from 'react';
import Form from './Form'
import Badge from './Badge'

class App extends Component {
  constructor() {
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
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  handleSubmit = e => {
    e.preventDefault()
    const newBadge = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      placeOfBirth: this.state.placeOfBirth,
      phone: this.state.phone,
      favoriteFood: this.state.favoriteFood,
      about: this.state.about
    }
    this.setState({
      badge: newBadge,
      firstName: '',
      lastName: '',
      email: '',
      placeOfBirth: '',
      phone: '',
      favoriteFood: '',
      about: ''
    })
  }

  render() {
    const { firstName, lastName, email, placeOfBirth, phone, favoriteFood, about, badge} = this.state
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
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <Badge
          firstName={badge.firstName}
          lastName={badge.lastName}
          emai={badge.email}
          placeOfBirth={badge.placeOfBirth}
          phone={badge.phone}
          favoriteFood={badge.favoriteFood}
          about={badge.about} />
      </div>
    );
  }
}

export default App;



