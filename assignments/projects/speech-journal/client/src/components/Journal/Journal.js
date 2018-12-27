import React, { Component } from 'react'
import JournalForm from './JournalForm'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'

class Journal extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      content: '',
      recordingState: ''
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

  handleTitleRecord = () => {
    this.setState({recordingState: 'title'})
    this.props.resetTranscript()
    this.props.startListening()
   
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-white mb-5">Journal Entry</h1>
        <button onClick={this.handleTitleRecord}>Record Title</button>
        <button>Record Entry</button>
        <button>Stop Recording</button>
        <JournalForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          content={this.state.content}
          success={this.props.success}
          transcript={this.props.transcript}
          recordingState={this.state.recordingState} />
      </div>
    )
  }
}

export default withUser(withEntry(Journal))
