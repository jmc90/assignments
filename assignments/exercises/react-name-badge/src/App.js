import React, { Component } from 'react';
import Form from './Form'
import Badge from './Badge'

class App extends Component {
  constructor(){
    super()
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phone: '',
        favoriteFood: '',
      }
    }
    
  }
  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default App;
