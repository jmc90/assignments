import React, { Component } from 'react'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'
import { Link } from 'react-router-dom'

class EntryHistory extends Component {
  componentDidMount() {
    this.props.getUserEntries(this.props.user._id)
  }

  render() {
    return (
      <div>
      {this.props.entries.map(entry => <div key={entry._id}><Link to={`/entry/${entry._id}`}>Title: {entry.title}</Link></div>)}
      </div>
    )
  }
  
}

export default withEntry(withUser(EntryHistory))
