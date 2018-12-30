import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
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
import SpeechRecognition from 'react-speech-recognition'



class App extends Component {
  render() {
    const { transcript, resetTranscript, startListening, stopListening } = this.props
    return (
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" render={routerProps => <LandingPage {...routerProps}/>} />
          <Route path="/signin" render={routerProps => <SignIn {...routerProps}/>} />
          <Route path="/register" render={routerProps => <Register {...routerProps}/>} />
          <Route path="/journal" render={routerProps => <Journal {...routerProps} 
                                                          transcript={transcript} 
                                                          resetTranscript={resetTranscript}
                                                          startListening={startListening}
                                                          stopListening={stopListening} />} />
          <Route path="/entryhistory" render={routerProps => <EntryHistory {...routerProps}/>} />
          <Route path="/entry/:id" render={routerProps => <Entry {...routerProps}/>} />
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
