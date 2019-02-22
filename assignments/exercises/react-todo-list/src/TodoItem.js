import React from 'react'

const TodoItem = ({item, handleClick}) => {
  return (
    <div className="todo-item">
        <input type="checkbox" checked={item.completed} onChange={() => handleClick(item.id)} />
        <p>{item.text}</p>
    </div>
  )
}

export default TodoItem
