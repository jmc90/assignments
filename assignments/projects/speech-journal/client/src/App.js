import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register"
import Journal from "./components/Journal/Journal";
import EntryHistory from "./components/EntryHistory/EntryHistory";
import Entry from "./components/Entry";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/register" component={Register}/>
          <Route path="/journal" component={Journal}/>
          <Route path="/entryhistory" component={EntryHistory}/>
        </Switch>
        <Footer /> 
      </div>
    )
  }
}

export default App
