import React from 'react'
import './styles/stars.css'
import logo from './styles/images/nasa.png'

const Home = () => {
  return (
    <div className="home">
        <div className="home-title-div d-flex justify-content-center align-items-center">
          <div className="title d-flex flex-column align-items-center">
            <img src={logo} alt="nasa" width="400"/>
            <h1 className="display-3">Image Gallery Powered by The Nasa API</h1>
          </div>
        </div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
    </div>
  )
}

export default Home
