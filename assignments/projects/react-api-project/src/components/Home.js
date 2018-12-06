import React from 'react'
import '../styles/stars.css'
import logo from '../styles/images/nasa.png'
import astronomyPic from '../styles/images/apod-example.jpg'
import roverPic from '../styles/images/curiosity-selfie.jpg'

const Home = () => {
  return (
    <div>
      <div className="home border-bottom border-primary">
        <div className="home-title-div d-flex justify-content-center align-items-center">
          <div className="title d-flex flex-column align-items-center">
            <img src={logo} alt="nasa" width="200" />
            <h1 className="text-center">Image Gallery Powered by The Nasa API</h1>
          </div>
        </div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 my-4">
            <h1>What is this?</h1>
          </div>
          <div className="col-12 d-flex flex-column flex-md-row mb-4">
            <img className="shadow mr-md-4 align-self-center" src={astronomyPic} alt="astronomy-pic" width="200" />
            <div className="align-self-center">
              <h3 className="my-3 text-center text-md-left">View the Astronomy Picture of the Day</h3>
              <p className="my-3 text-center text-md-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at saepe in odit. Numquam corporis quam ad cumque! Temporibus cumque ut natus ipsam quis doloremque quibusdam in labore totam impedit.</p>
            </div>
          </div>
          <div className="col-12 d-flex flex-column flex-md-row my-5">
            <img className="shadow mr-md-4 align-self-center" src={roverPic} alt="rover-pic" width="200" />
            <div className="align-self-center">
              <h3 className="my-3 text-center text-md-left">Explore Mars Rover Photos</h3>
              <p className="my-3 text-center text-md-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at saepe in odit. Numquam corporis quam ad cumque! Temporibus cumque ut natus ipsam quis doloremque quibusdam in labore totam impedit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
