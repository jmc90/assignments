import React, { Component } from 'react'
import axios from 'axios'
import BountyList from './BountyList'
import BountyForm from './BountyForm'


class App extends Component {
  constructor(){
    super()
    this.state = {
        bounties: [],
        firstName: '',
        lastName: '',
        living: true,
        bountyAmount: '',
        type: 'Sith'

    }
}

componentDidMount(){
  axios.get('/bounties').then(res => {
      this.setState({
        bounties: res.data
      })
  })
}

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    if (event.target.type === "radio") {
      if (value === "alive") {
        this.setState({living: true})
      } else if (value === "dead") {
        this.setState({living: false})
      }
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const newBounty = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        living: this.state.living,
        bountyAmount: this.state.bountyAmount,
        type: this.state.type
    }
    
    axios.post('/bounties', newBounty).then(res => {
      this.setState(prevState => {
        return {
            bounties: [...prevState.bounties, res.data],
            firstName: '',
            lastName: '',
            bountyAmount: '',
      }
    })
  })
}

handleDelete = (id) => {
  axios.delete(`/bounties/${id}`)
      .then(res => {
          this.setState({
            bounties: res.data
          })
      })
}

handleEdit = (id, updates) => {
  axios.put(`/bounties/${id}`, updates)
      .then (res => {
        console.log(res.data)
        this.setState({
          bounties: res.data
          })
      })
} 


  render() {
    const {firstName, lastName, living, bountyAmount, type, bounties} = this.state
    

    return (
      <div>
        <BountyForm
          firstName={firstName}
          lastName={lastName}
          living={living}
          bountyAmount={bountyAmount}
          type={type}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <BountyList 
          bounties={bounties}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit} />
      </div>
    )
  }
}

export default App;
