import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { withUser } from './context/UserProvider'
import NavbarContainer from "./components/Navbar/NavbarContainer"
import Footer from "./components/Footer/Footer"
import LandingPage from "./components/LandingPage/LandingPage"
import SignIn from "./components/SignIn/SignIn"
import Register from "./components/Register/Register"
import Journal from "./components/Journal/Journal"
import EntryHistory from "./components/EntryHistory/EntryHistory"
import Entry from "./components/EntryHistory/Entry"
import './App.css'



class App extends Component {
  componentDidMount(){
    this.props.verify()
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" render={routerProps => 
                                          this.props.isAuthenticated 
                                          ? <Redirect to="/journal"/> 
                                          : <LandingPage {...routerProps}/>} />
          <Route path="/signin" render={routerProps => 
                                          this.props.isAuthenticated 
                                          ? <Redirect to="/journal"/> 
                                          : <SignIn {...routerProps}/>} />
          <Route path="/register" render={routerProps => 
                                          this.props.isAuthenticated 
                                          ? <Redirect to="/journal"/> 
                                          : <Register {...routerProps}/>} />
          <Route path="/journal" render={routerProps => 
                                          !this.props.isAuthenticated 
                                          ? <Redirect to="/" /> 
                                          : <Journal {...routerProps}/>} />
          <Route path="/entryhistory" render={routerProps => 
                                          !this.props.isAuthenticated 
                                          ? <Redirect to="/" /> 
                                          : <EntryHistory {...routerProps}/>} />
          <Route path="/entry/:id" render={routerProps => 
                                          !this.props.isAuthenticated 
                                          ? <Redirect to="/" /> 
                                          : <Entry {...routerProps}/>} />
        </Switch>
        <Footer /> 
      </div>
    )
  }
}

export default withUser(App)
