import React from 'react'

const JournalForm = ({handleChange, handleSubmit, title, content}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="Entry"
          value={title}
          onChange={handleChange}
           />
        <textarea 
          name="content" 
          placeholder="Journal entry.."
          value={content}
          onChange={handleChange}
          cols="30" 
          rows="10"/>
      </form>
    </div>
  )
}

export default JournalForm
