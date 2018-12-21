import React, { Component } from 'react'
import axios from 'axios'

const EntryContext = React.createContext()

class EntryProvider extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      singleEntry: {}
    }
  }

  render() {
    return (
      <EntryContext.Provider
        value={{
          entries: this.state.entries,
          singleEntry: this.state.singleEntry
        }}>
        {this.props.children}
      </EntryContext.Provider>
    )
  }
}

export default EntryProvider

export const withEntry = C => props => (
  <EntryContext.Consumer>
    {value => <C {...props} {...value} />}
  </EntryContext.Consumer>
)