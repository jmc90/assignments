import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  addOne = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 }
    })
  }

  minusOne = () => {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 }
    })
  }

  multiplyTwo = () => {
    this.setState(prevState => {
      return { counter: prevState.counter * 2 }
    })
  }

  divideTwo = () => {
    this.setState(prevState => {
      return { counter: prevState.counter / 2 }
    })
  }


  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addOne}>+</button>
        <button onClick={this.minusOne}>-</button>
        <button onClick={this.multiplyTwo}>multiply by 2</button>
        <button onClick={this.divideTwo}>divide by 2</button>
      </div>
    )
  }
}

export default App;
