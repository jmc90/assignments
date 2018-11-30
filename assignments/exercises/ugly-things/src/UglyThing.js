import React, {Component} from 'react'
import { withUglyThings } from './UglyThingsProvider'

class UglyThing extends Component {
  constructor() {
    super() 
    this.state = {
      isEditing: false,
      title: '',
      description: '',
      imgUrl: ''
    }
  }

  editToggler = () => {
    this.setState(prevState => {
      return {
        isEditing: !prevState.isEditing
      }
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
    const updates = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    }
    this.props.handleEdit(this.props._id, updates)
    this.setState({
      title: '',
      description: '',
      imgUrl: ''
    })
    this.editToggler()
  }


  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <img src={this.props.imgUrl} alt="ugly"/>
      </div>
    )
  }
}

export default withUglyThings(UglyThing)
