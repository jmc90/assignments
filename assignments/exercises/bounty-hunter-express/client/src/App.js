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
    const value = event.target.type === "radio" ? event.target.value === "alive" ? true : false : event.target.value
    this.setState({
        [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const newBounty = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        living: this.state.living,
        bountyAmount: this.state.bountyAmount,
        type: this.state.type
    }
    
    axios.post('/bounties', newBounty).then(res => {
      console.log(res)
      this.setState(prevState => {
        return {
            bounties: [...prevState.bounties, res.data],
            firstName: '',
            lastName: '',
            living: '',
            bountyAmount: '',
            type: ''
      }
    })
  })
}


  


  render() {
    const {firstName, lastName, living, bountyAmount, type} = this.state
    const mappedBounties = this.state.bounties.map(b => 
      <BountyList 
        firstName={b.firstName}
        lastName={b.lastName}
        living={b.living}
        bountyAmount={b.bountyAmount}
        type={b.type}
        key={b._id} />)

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
        {mappedBounties}
      </div>
    );
  }
}

export default App;
