import React from 'react'
import './styles/stars.css'
import logo from './styles/images/nasa.png'

const Home = () => {
  return (
    <div className="home">
        <div className="home-title-div">
          <div className="title">
            <img src={logo} alt="nasa"/>
          </div>
        </div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
    </div>
  )
}

export default Home
