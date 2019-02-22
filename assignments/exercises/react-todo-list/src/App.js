import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todosData from "./todosData"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todosData: todosData 
    }
  }

  handleClick = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todosData.map(todo => {
          if (todo.id === id) {
              todo.completed = !todo.completed
          }
          return todo
      })
      return {
          todosData: updatedTodos
      }
  })
  }

  render() {
    const mappedTodos = this.state.todosData.map(item => <TodoItem key={item.id} item={item} handleClick={this.handleClick} />)
    return (
      <div className="todo-list">
         {mappedTodos}
      </div>
    )
  } 
}

export default App;
