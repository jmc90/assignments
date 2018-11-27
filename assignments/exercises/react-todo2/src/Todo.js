import React from 'react'

const Todo = ({title, handleDelete, id}) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default Todo
