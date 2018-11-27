import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header'
import CardList from './CardList'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hitList: []
    }
  }

  componentDidMount() {
    axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
      this.setState({ 
        hitList: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <CardList hitList={this.state.hitList} />
      </div>
    );
  }
}

export default App;
