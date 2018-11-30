import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class UglyThingsProvider extends Component {
    constructor(){
        super()
        this.state = {
            uglyThings: [],
            title: "",
            description: "",
            imgUrl: ""
        }
    }

    getUglyThings = () => {
       axios.get(`https://api.vschool.io/Jon/todo`).then(response => {
           this.setState({
               uglyThings: response.data
           })
       })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newUgly = {
          title: this.state.title,
          description: this.state.description,
          imgUrl: this.state.imgUrl
        }
        axios.post(`https://api.vschool.io/Jon/todo`, newUgly)
            .then(response => {
              this.setState(prevState => {
                return {
                  uglyThings: [...prevState.uglyThings, response.data],
                  title: "",
                  description: "",
                  imgUrl: ""
                }
              })
            })
      }
    

    render(){
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                getUglyThings: this.getUglyThings,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                uglyTitle: this.state.title,
                uglyDescription: this.state.description,
                uglyImgUrl: this.state.imgUrl
            }}>
                { this.props.children }
            </Provider>
        )
    }
}


export const withUglyThings = C => props => (
    <Consumer>
        { value => <C {...props} {...value}/>}
    </Consumer>
)

export default UglyThingsProvider