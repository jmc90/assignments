import React, { Component } from 'react'
import JournalForm from './JournalForm'
import { withEntry } from '../../context/EntryProvider'

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
    this.props.addEntry(newEntry)
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    return (
      <div>
        <JournalForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          content={this.state.content} />
      </div>
    )
  }
}

export default withEntry(Journal)
