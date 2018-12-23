import React, { Component } from 'react'
import { withEntry } from '../../context/EntryProvider'
import { withUser } from '../../context/UserProvider'

class Entry extends Component {
  componentDidMount() {
    this.props.getSingleEntry(this.props.singleEntry._id)
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default withEntry(withUser(Entry))