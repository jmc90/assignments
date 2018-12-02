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
    
      handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/Jon/todo/${id}`)
            .then(response => {
              alert(response.data.msg)
              this.setState(prevState => {
                return {
                  uglyThings: prevState.uglyThings.filter(thing => thing._id !== id)
                }
              })
            })
      }
    
      handleEdit = (id, updates) => {
        axios.put(`https://api.vschool.io/Jon/todo/${id}`, updates)
            .then (response => {
              console.log(response.data)
              this.setState(prevState => {
                return {
                  uglyThings: prevState.uglyThings.map(thing => thing._id === id ? response.data : thing)
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
                handleDelete: this.handleDelete,
                handleEdit: this.handleEdit,
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