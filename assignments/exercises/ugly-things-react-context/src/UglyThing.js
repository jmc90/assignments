import React, {Component, Fragment} from 'react'
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
      <Fragment>
        {this.state.isEditing ?
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
                placeholder={this.props.title}
                required />
                <input
                  type="text"
                  value={this.state.description}
                  name="description"
                  onChange={this.handleChange}
                  placeholder={this.props.description}
                  required />
                <input
                  type="text"
                  value={this.state.imgUrl}
                  name="imgUrl"
                  onChange={this.handleChange}
                  placeholder={this.props.imgUrl}
                  required />
                <button>Submit Edit</button>
            </form>
            <button onClick={this.editToggler}>Close</button>
          </div>
          :
          <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <img src={this.props.imgUrl} alt="ugly"/>
            <button onClick={() => this.props.handleDelete(this.props._id)}>Delete</button>
            <button onClick={this.editToggler}>Edit</button>
          </div>
        }
      </Fragment>
    )
  }
}

export default withUglyThings(UglyThing)
