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

  render() {
    const mappedTodos = this.state.todosData.map(item => <TodoItem key={item.id} item={item} />)
    return (
      <div className="todo-list">
         {mappedTodos}
      </div>
    )
  } 
}

export default App;
