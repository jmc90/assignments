import React, { Component } from 'react'
import axios from 'axios'
import ApodCard from './ApodCard'
import DateInput from './DateInput'


class ApodContainer extends Component {
    constructor() {
        super()
        this.state = {
            apodData: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=5JfuhmidZ7zeIkYNuoNzTwsG3nzseaYFfiSamsb3`)
             .then(response => {
               console.log(response)
                this.setState({
                    apodData: response.data
                })
             })
             .catch(err => console.log(err))
    }


  render() {
    const { apodData } = this.state
    return (
      <div>
        <ApodCard
            apodData={apodData} />
        <DateInput />
      </div>
    )
  }
}

export default ApodContainer