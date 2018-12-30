import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { withUser } from './context/UserProvider'
import ProtectedRoute from "./components/shared/ProtectedRoute"
import NavbarContainer from "./components/Navbar/NavbarContainer"
import Footer from "./components/Footer/Footer"
import LandingPage from "./components/LandingPage/LandingPage"
import SignIn from "./components/SignIn/SignIn"
import Register from "./components/Register/Register"
import Journal from "./components/Journal/Journal"
import EntryHistory from "./components/EntryHistory/EntryHistory"
import Entry from "./components/EntryHistory/Entry"
import './App.css'
import SpeechRecognition from 'react-speech-recognition'



class App extends Component {
  render() {
    const { transcript, resetTranscript, startListening, stopListening, token } = this.props
    return (
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" render={routerProps => <LandingPage {...routerProps}/>} />
          <Route path="/signin" render={routerProps => <SignIn {...routerProps}/>} />
          <Route path="/register" render={routerProps => <Register {...routerProps}/>} />
          <ProtectedRoute 
            path="/journal" 
            component={Journal} 
            redirectTo={'/'} 
            token={token} 
            otherProps={{transcript,resetTranscript, startListening,stopListening}} />
          <ProtectedRoute 
            path="/entryhistory" 
            component={EntryHistory} 
            redirectTo={'/'} 
            token={token} />
          <ProtectedRoute
            path="/entry/:id" 
            component={Entry} 
            redirectTo={'/'} 
            token={token} />
        </Switch>
        <Footer /> 
      </div>
    )
  }
}

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(withUser(App))
