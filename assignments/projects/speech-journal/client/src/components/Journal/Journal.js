import React, { Component } from 'react'
import JournalForm from './JournalForm'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'

class Journal extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = {
      title: this.state.title,
      content: this.state.content
    }
    this.props.addEntry(newEntry, this.props.user._id)
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    return (
      <div className="container my-5">
        <JournalForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          content={this.state.content}
          success={this.props.success} />
      </div>
    )
  }
}

export default withUser(withEntry(Journal))
