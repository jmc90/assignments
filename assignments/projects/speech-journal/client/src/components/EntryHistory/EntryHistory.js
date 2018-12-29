import React, { Component } from 'react'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'
import EntryDiv from './EntryDiv'
import './EntryHistory.css'

class EntryHistory extends Component {
  componentDidMount() {
    this.props.getUserEntries(this.props.user._id)
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-white m-3">Past Entries</h1>
        <div className="entries-container d-flex flex-column align-items-center">
          {this.props.entries.map(entry => <EntryDiv key={entry._id} entryId={entry._id} title={entry.title} date={entry.entryDate} />)}
        </div>
      </div>
    )
  }

}

export default withEntry(withUser(EntryHistory))
