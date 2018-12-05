import React, { Component } from 'react'
import axios from 'axios'
import RoverList from './RoverList'
import RoverSelectForm from './RoverSelectForm'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

class RoverContainer extends Component {
    constructor() {
        super()
        this.state = {
            roverPhotos: [],
            rover: "curiosity",
            sol: ""
        }
    }

    componentDidMount() {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_KEY}`)
             .then(response => {
               console.log(response)
                this.setState({
                    roverPhotos: response.data.photos
                })
             })
             .catch(err => console.log(err))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
      }

      handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&page=1&api_key=${API_KEY}`)
            .then(response => {
                console.log(response)
              this.setState({
                  roverPhotos: response.data.photos
              })
            })
      }

  render() {
    const { roverPhotos } = this.state
    return (
      <div>
        <RoverSelectForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        <RoverList
            roverPhotos={roverPhotos} />
      </div>
    )
  }
}

export default RoverContainer
