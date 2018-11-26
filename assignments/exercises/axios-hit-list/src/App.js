import React, { Component } from 'react';
import Header from './Header'
import CardList from './CardList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardList />
      </div>
    );
  }
}

export default App;
