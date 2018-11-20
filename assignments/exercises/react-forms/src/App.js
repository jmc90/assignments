import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      petFirstName: '',
      petLastName: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleSubmit = event => {
    event.preventDefault()
    alert(`A pet's name was Submitted: ${this.state.petFirstName} ${this.state.petLastName}`)
  }

  render() {
    return (
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
    );
  }
}

export default App;
