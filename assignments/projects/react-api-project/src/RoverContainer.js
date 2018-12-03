import React, { Component } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

class RoverContainer extends Component {
    constructor() {
        super()
        this.state = {
            roverPhotos: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_KEY}`)
             .then(response => {
               console.log(response)
                this.setState({
                    roverPhotos: response.data
                })
             })
             .catch(err => console.log(err))
    }

  render() {
    const { roverPhotos } = this.state
    return (
      <div>
        {roverPhotos.map(photo => 
            <RoverImage 
                url={photo.img_src}
                key={photo.id} />)}
      </div>
    )
  }
}

export default RoverContainer
