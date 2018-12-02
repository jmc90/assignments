import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import axios from 'axios'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Main from "./components/Main"



class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }
  
  componentDidMount() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=5JfuhmidZ7zeIkYNuoNzTwsG3nzseaYFfiSamsb3`)
         .then(response => {
           console.log(response.data)
            this.setState({
                data: response.data
            })
         })
         .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      <Navbar/> 
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/main" 
                 render={routeprops => 
                          <Main {...routeprops}
                                url={this.state.data.url} />} />
          <Route path="/about" component={About}/>
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
