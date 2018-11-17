import React from 'react'
import { vacationSpots } from './vacationSpots'
import CardList from './CardList'
import 'tachyons'

const App = () => {

    return (
      <div className="tc">
        <h1 className="tc f1 underline">Popular Destinations</h1>
        <CardList spots={vacationSpots} />
      </div>
    )
}

export default App


