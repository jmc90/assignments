import React, { Component } from 'react'
import axios from 'axios'

export const { Provider, Consumer } = React.createContext()

const API_KEY = process.env.REACT_APP_NASA_API_KEY

export default class ApodProvider extends Component {
    constructor(){
        super()
        this.state = {
            apodData: {},
            date: ""
        }
    }

    getData = () => {
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
    
    render(){
        return (
            <Provider value={{
                apodData: this.state.apodData,
                date: this.state.date,
                getData: this.getData,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withApod = C => props => (
    <Consumer>
        {value => <C {...props} {...value}/>}
    </Consumer>
)