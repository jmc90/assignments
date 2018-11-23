import React, { Component } from 'react';
import Form from './Form'
import Badge from './Badge'
import './App.css'

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
      about: 'Tell us about yourself..',
      badges: []
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
    this.setState(prevState => {
      return {
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phone: '',
        favoriteFood: '',
        about: '',
        badges: [...prevState.badges, newBadge]
      }
    })
  }

  render() {
    const { firstName, lastName, email, placeOfBirth, phone, favoriteFood, about, badges} = this.state
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
          badges={badges} />
      </div>
    );
  }
}

export default App;



