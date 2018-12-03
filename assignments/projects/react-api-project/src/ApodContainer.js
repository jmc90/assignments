import React, { Component } from 'react'
import axios from 'axios'
import ApodCard from './ApodCard'
import DateInput from './DateInput'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

class ApodContainer extends Component {
    constructor() {
        super()
        this.state = {
            apodData: [],
            date: ""
        }
    }

    componentDidMount() {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
             .then(response => {
               console.log(response)
                this.setState({
                    apodData: response.data
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


  render() {
    const { apodData } = this.state
    return (
      <div>
        <ApodCard apodData={apodData} />
        <DateInput handleChange={this.handleChange} />
      </div>
    )
  }
}

export default ApodContainer