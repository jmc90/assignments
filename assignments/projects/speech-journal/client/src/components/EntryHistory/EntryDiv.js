import React from 'react'
import { Link } from 'react-router-dom'

const EntryDiv = ({ entryId, title }) => {
  return (
    <div>
      <Link to={`/entry/${entryId}`}>
        <div>
          <h1>Title: {title}</h1>
        </div>
      </Link>
    </div>
  )
}

export default EntryDiv
