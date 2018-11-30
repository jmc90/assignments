import React, { Component } from 'react'
import axios from 'axios'

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            todo: {}
        }
    }

    componentDidMount(){
        axios.get(`https://api.vschool.io/Jon/todo/${this.props.match.params.todoId}`).then(res => {
            this.setState({
                todo: res.data
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.state.todo.title}</h1>
                <h1>{this.state.todo.description}</h1>
                <h1>{this.state.todo.completed}</h1>
                <h1>{this.state.todo._id}</h1>
            </div>
        )
    }
}

export default Todo;