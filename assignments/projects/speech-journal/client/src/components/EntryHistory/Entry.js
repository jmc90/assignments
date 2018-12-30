import React, { Component } from 'react'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'

class Entry extends Component {
  componentDidMount() {
    this.props.getSingleEntry(this.props.user._id, this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <h3>{this.props.singleEntry.entryDate}</h3>
        <h1>{this.props.singleEntry.title}</h1>
        <p>{this.props.singleEntry.content}</p>
      </div>
    )
  }
}

export default withEntry(withUser(Entry))