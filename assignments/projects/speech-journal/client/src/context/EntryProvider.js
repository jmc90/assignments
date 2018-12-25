import React, { Component } from 'react'
import axios from 'axios'

const EntryContext = React.createContext()

class EntryProvider extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      singleEntry: {},
      success: ''
    }
  }

  getUserEntries = userId => {
    axios.get(`/entry/${userId}`).then(res => {
      this.setState({
        entries: res.data
      })
    })
    .catch(err => console.log(err))
  }

  getSingleEntry = (userId, entryId) => {
    axios.get(`/entry/${userId}/${entryId}`).then(res => {
      this.setState({
        singleEntry: res.data
      })
    })
    .catch(err => console.log(err))
  }

  addEntry = (post, userId) => {
    axios.post(`/entry/${userId}`, post).then(res => {
      this.handleSuccessPost()
    })
    .catch(err => console.log(err))
  }

  deleteEntry = entryId => {
    axios.delete(`/entry/${entryId}`).then(res => {
      if (res.data === "Successfully deleted entry!") {
        this.setState(prevState => {
          return {
            entries: prevState.entries.filter(entry => entry._id !== entryId)
          }
        })
      }
    })
    .catch(err => console.log(err))
  }

  handleSuccessPost = () => {
    this.setState({success: "Succesfully Added New Entry!"})
  }

  render() {
    return (
      <EntryContext.Provider
        value={{
          entries: this.state.entries,
          singleEntry: this.state.singleEntry,
          success: this.state.success,
          getUserEntries: this.getUserEntries,
          getSingleEntry: this.getSingleEntry,
          addEntry: this.addEntry,
          deleteEntry: this.deleteEntry
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