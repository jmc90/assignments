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

    render(){
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                getUglyThings: this.getUglyThings,
                uglyTitle: this.state.title,
                uglyDescription: this.state.description,
                uglyimgUrl: this.state.imgUrl
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