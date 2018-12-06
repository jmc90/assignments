import React, { Component } from 'react'
import axios from 'axios'

export const { Provider, Consumer } = React.createContext()

const API_KEY = process.env.REACT_APP_NASA_API_KEY

export default class RoverProvider extends Component {
    constructor(){
        super()
        this.state = {
            roverPhotos: [],
            rover: "curiosity",
            sol: "1000",
            noPhotos: false,
            page: 1
        }
    }

    getData = () => {
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
                if (response.data.photos.length) {
                    this.setState({
                        roverPhotos: response.data.photos,
                        noPhotos: false,
                        page: 1
                    })
                } else {
                    this.setState({
                        noPhotos: true,
                        roverPhotos: [],
                        page: 1
                    })
                }
            })
            .catch(err => console.log(err))
    }

    handleMoreClick = () => {
        this.setState(prevState => {
            return { page: prevState.page + 1 }
        }, () => {
            const pageNumber = this.state.page.toString()
            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&page=${pageNumber}&api_key=${API_KEY}`)
                .then(response => {
                    console.log(response)
                    if (response.data.photos.length) {
                        this.setState(prevState => {
                            return { roverPhotos: [...prevState.roverPhotos, ...response.data.photos] }
                        })
                    } else {
                        alert("No More Photos Available")
                    }
                })
        })

    }

    render(){
        return (
            <Provider value={{
                roverPhotos: this.state.roverPhotos,
                rover: this.state.rover,
                sol: this.state.sol,
                noPhotos: this.state.noPhotos,
                page: this.state.page,
                getData: this.getData,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleMoreClick: this.handleMoreClick
                
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withRover = C => props => (
    <Consumer>
        {value => <C {...props} {...value}/>}
    </Consumer>
)