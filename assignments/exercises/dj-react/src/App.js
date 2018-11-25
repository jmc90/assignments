import React, { Component } from 'react';
import './App.css';
import ColorSquares from './ColorSquares';
import Buttons from './Buttons'

class App extends Component {
  constructor() {
    super()
    this.state = {
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white"
    }
  }

  handleClick = () => {
    const black = {box1: "black",
                   box2: "black",
                   box3: "black",
                   box4: "black"}
    const white = {box1: "white",
                   box2: "white",
                   box3: "white",
                   box4: "white"}
    this.setState(black) 
    if (this.state.box1 !== "white" &&
        this.state.box2 !== "white" &&
        this.state.box3 !== "white" &&
        this.state.box4 !== "white") {
      this.setState(white)
    }                
   }

   handleClick2 = () => {
    this.setState({box1: "purple", box2: "purple"})
   }

   handleClick3 = () => {
    this.setState({box3: "blue"})
   }

   handleClick4 = () => {
    this.setState({box4: "blue"})
   }

   handleClick5 = () => {
     this.setState({box1: "fuchsia"})
   }

   handleClick6 = () => {
    this.setState({box2: "gold"})
  }

  handleClick7 = () => {
    this.setState({box3: "aquamarine"})
  }

  handleClick8 = () => {
    this.setState({box4: "yellow"})
  }


  render() {
    return (
      <div>
        <ColorSquares box1={this.state.box1} 
                      box2={this.state.box2} 
                      box3={this.state.box3} 
                      box4={this.state.box4}/>
        <Buttons handleClick={this.handleClick}
                 handleClick2={this.handleClick2}
                 handleClick3={this.handleClick3}
                 handleClick4={this.handleClick4} 
                 handleClick5={this.handleClick5}
                 handleClick6={this.handleClick6}
                 handleClick7={this.handleClick7}
                 handleClick8={this.handleClick8} />
      </div>
    );
  }
}

export default App;
