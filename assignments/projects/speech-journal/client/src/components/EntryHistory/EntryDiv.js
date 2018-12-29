import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const EntryDiv = ({ entryId, title, date }) => {
  return (
    <div className="entry-div bg-white p-3 m-2">
      <Link to={`/entry/${entryId}`}>
        <h4>Date: {moment(date).format('MM/DD/YYYY')} </h4>
        <h4>Title: {title}</h4>
      </Link>
    </div>
  )
}

export default EntryDiv
        