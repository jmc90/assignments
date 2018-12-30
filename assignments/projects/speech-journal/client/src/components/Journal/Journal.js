import React, { Component } from 'react'
import JournalForm from './JournalForm'
import { withUser } from '../../context/UserProvider'
import { Button } from 'reactstrap'

class Journal extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: '',
      content: '',
      recordingState: ''
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(this.state.recordingState === "title"){
      this.setState({
        title: nextProps.transcript
      })
    }
    else if(this.state.recordingState === "content"){
      this.setState({
        content: nextProps.transcript
      })
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
    this.props.history.push('/entryhistory')
  }

  handleRecord = stateKey => {
    this.setState({recordingState: stateKey}, () =>  this.props.resetTranscript())
    this.props.startListening()
  }

  handleStopRecord = () => {
    this.props.stopListening()
  }


  render() {
    return (
      <div className="container my-5 text-white">
        <h1 className="text-center text-capitalize">Welcome {this.props.user.firstName}</h1>
        <h1 className="text-white">Journal Entry</h1>
        <p>Type or record your thoughts!</p>
        <p>(Speech to text will only work in Chrome browser!)</p>
        <Button color="success" onClick={() => this.handleRecord('title')}>Record Title</Button>
        <Button color="success" onClick={() => this.handleRecord('content')}>Record Entry</Button>
        <Button color="primary" onClick={this.handleStopRecord}>Stop Recording</Button>
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

export default withUser(Journal)
