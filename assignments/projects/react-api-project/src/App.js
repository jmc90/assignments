import React from 'react'
import { Switch, Route } from "react-router-dom";
import NavbarContainer from "./components/NavbarContainer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ApodContainer from './components/Apod/ApodContainer';
import RoverContainer from './components/Rover/RoverContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)



const App = () => {
  return (
    <div className="bg-light">
      <NavbarContainer/>  
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/apod" component={ApodContainer} />
          <Route path="/rovergallery" component={RoverContainer} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App

