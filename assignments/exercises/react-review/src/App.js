import React from 'react';
import people from './data.json'
import Person from './Person'
import './style.css'

// Stateless 
// Functional Component / Display Component

const mappedPeople = people.data.map(person =>
  <Person
    name={person.name}
    age={person.age}
    friends={person.friends}
    key={person.id} />)

const App = () => {
  return (
    <div>
      {mappedPeople}
    </div>
  )
}

export default App;
