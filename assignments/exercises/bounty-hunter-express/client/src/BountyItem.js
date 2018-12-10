import React, { Component, Fragment } from 'react'

class BountyItem extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            living: true,
            bountyAmount: '',
            type: 'Sith',
            isEditing: false
        }
    }

    editToggler = () => {
        this.setState(prevState => {
          return {
            isEditing: !prevState.isEditing
          }
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

      handleSubmit = e => {
        e.preventDefault()
        const updates = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type
        }
        this.props.handleEdit(this.props.id, updates)
        this.setState({
            firstName: '',
            lastName: '',
            living: true,
            bountyAmount: '',
            type: 'Sith'
        })
        this.editToggler()
      }

    render() {
        const { firstName, lastName, living, bountyAmount, type, id, handleDelete } = this.props
        let livingStatus
        if (living) {
            livingStatus = "Alive"
        } else {
            livingStatus = "Dead"
        }

        return (
            <Fragment>
                {this.state.isEditing ?
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
                        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
                        <input type="radio" name="living" value="alive" onChange={this.handleChange} checked={this.state.living === true}  /> Alive
                        <input type="radio" name="living" value="dead" onChange={this.handleChange}  checked={this.state.living === false} /> Dead
                        <input type="number" name="bountyAmount" value={this.state.bountyAmount} placeholder="Bounty Amount" onChange={this.handleChange}/>
                        <select name="type" value={this.state.type} onChange={this.handleChange}>
                            <option value="Sith">Sith</option>
                            <option value="Jedi">Jedi</option>
                        </select>
                        <button>Submit Edit</button>
                    </form>
                </div>
                :
                <div>
                    <h1>{firstName} {lastName}</h1>
                    <h3>{livingStatus}</h3>
                    <h3>{bountyAmount}</h3>
                    <h3>{type}</h3>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <button onClick={this.editToggler}>Edit</button>
                </div>
                
                }
            </Fragment>
        )
    }
}

export default BountyItem
