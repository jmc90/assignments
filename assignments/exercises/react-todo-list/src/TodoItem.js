import React from 'react'

const TodoItem = ({item}) => {
  return (
    <div className="todo-item">
        <input type="checkbox" checked={item.completed}/>
        <p>{item.text}</p>
    </div>
  )
}

export default TodoItem
