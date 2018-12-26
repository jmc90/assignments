import React, { Component } from 'react'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'
import EntryDiv from './EntryDiv'

class EntryHistory extends Component {
  componentDidMount() {
    this.props.getUserEntries(this.props.user._id)
  }

  render() {
    return (
      <div>
      {this.props.entries.map(entry => <EntryDiv key={entry._id} entryId={entry._id} title={entry.title} />)}
      </div>
    )
  }

}

export default withEntry(withUser(EntryHistory))
