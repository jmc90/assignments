import React from 'react'
import Friend from './Friend'
import PropTypes from 'prop-types'

const Person = ({name, age, friends}) => {

    const mappedFriends = friends.map((friend, i)=> <Friend key={friend + i} name={friend} />)

    let currentClass

    if (age > 50) {
        currentClass = "red-text"
    } else if (age <= 50) {
        currentClass = "green-text"
    }

    return (
      <div className={`person-container ${currentClass}`}>
        <h1>Name: {name}</h1>
        <h3>Age: {age}</h3>
        <h4>Friends: </h4>
        {mappedFriends}
      </div>
    )
  }

// PropTypes used on any component recieving props

  Person.propTypes = {
      name: PropTypes.string,
      age: PropTypes.number,
      friends: PropTypes.arrayOf(PropTypes.string)
  }
  
  export default Person;