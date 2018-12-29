import React, { Component } from 'react'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'

class Entry extends Component {
  componentDidMount() {
    this.props.getSingleEntry(this.props.user._id, this.props.match.params.id)
  }
  render() {
    return (
      <div className="container">
        <div className="entry">
          <h3>Date: {this.props.singleEntry.entryDate}</h3>
          <h3>Title: {this.props.singleEntry.title} </h3>
        </div>
        
        {/* <h1>{this.props.singleEntry.title}</h1>
        <p>{this.props.singleEntry.content}</p> */}
      </div>
    )
  }
}

export default withEntry(withUser(Entry))