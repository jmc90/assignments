import React from 'react'
import { Switch, Route } from "react-router-dom";
import NavbarContainer from "./NavbarContainer";
import Footer from "./Footer";
import Home from "./Home";
import Apod from "./Apod";
import About from "./About";


const App = () => {
  return (
    <div>
      <NavbarContainer/>  
      <Switch>
          <Route path="/" component={Home}/>
          <Route path="/apod" component={Apod}/>
          <Route path="/about" component={About}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App

