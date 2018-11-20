import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      petFirstName: '',
      petLastName: '',
      pets: []
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`A pet's name was Submitted: ${this.state.petFirstName} ${this.state.petLastName}`)
    const petNames = {
      first: this.state.petFirstName,
      last: this.state.petLastName
    }
    this.setState(prevState => {
      return {
        petFirstName: "",
        petLastName: "",
        pets: [...prevState.pets, petNames]}
    })
  }



  render() {

    const mappedNames = this.state.pets.map(pet => 
                        <li>{pet.first} {pet.last}</li>)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Pet First Name"
            value={this.state.petFirstName}
            name="petFirstName"
            onChange={this.handleChange} />
          <input type="text"
            placeholder="Pet last Name"
            value={this.state.petLastName}
            name="petLastName"
            onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <h1>{this.state.petFirstName} {this.state.petLastName}</h1>
        <h2>Pets</h2>
        <ol>
          {mappedNames}
        </ol>
      </div>
    );
  }
}

export default App;
