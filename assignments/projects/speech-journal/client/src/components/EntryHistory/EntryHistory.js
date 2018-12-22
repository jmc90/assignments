import React, { Component } from 'react'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'
import { Link } from 'react-router-dom'

class EntryHistory extends Component {
  componentDidMount() {
    this.props.getUserEntries(this.props.user._id)
  }

  render() {
    console.log(this.props.entries)
    return (
      <div>
      {this.props.entries.map(entry => <div><Link to={`/entryhistory/${entry._id}`}>{entry.title}</Link></div>)}
      </div>
    )
  }
  
}

export default withEntry(withUser(EntryHistory))
