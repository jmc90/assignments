import React, { Component } from 'react';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Links from './Links'
import Todo from './Todo'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.vschool.io/Jon/todo`).then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={props => <Links {...props} todos={this.state.todos} />} />
          <Route path="/:todoId" component={Todo} />
        </Switch>
      </div>
    );
  }
}

export default App;
