import React, { Component } from 'react';
import Box from './Box'
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      color: ''
    }
  }

  componentDidMount() {
    axios.get('http://www.colr.org/json/color/random')
        .then(response => {
          console.log(response.data.new_color)
          this.setState({
            color: response.data.new_color
          })
        })
  }

  render() {
    return (
      <div>
        <Box color={this.state.color} />
      </div>
    );
  }
}

export default App;
