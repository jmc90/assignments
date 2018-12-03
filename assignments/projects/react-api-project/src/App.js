import React from 'react'
import { Switch, Route } from "react-router-dom";
import NavbarContainer from "./NavbarContainer";
import Footer from "./Footer";
import Home from "./Home";
import ApodContainer from './ApodContainer';
import RoverContainer from './RoverContainer';




const App = () => {
  return (
    <div>
      <NavbarContainer/>  
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/apodContainer" component={ApodContainer} />
          <Route path="/roverGallery" component={RoverContainer} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App

