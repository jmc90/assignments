import React, { Component } from 'react'
import axios from 'axios'
import ApodCard from './ApodCard'
import ApodDateInput from './ApodDateInput'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

class ApodContainer extends Component {
    constructor() {
        super()
        this.state = {
            apodData: {},
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

      handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&api_key=${API_KEY}`)
            .then(response => {
              this.setState({
                  apodData: response.data,
                  date: ""
              })
            })
      }


  render() {
    const { apodData, date} = this.state
    return (
        <div className="container apod-container">
            <ApodDateInput 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    date={date} />
            <ApodCard apodData={apodData} />
       
      </div>
    )
  }
}

export default ApodContainer