const express = require('express')
const app = express()
const uuid = require('uuid/v4')

// Simulated Database of Todos
let todosCollection = [
    {
        name: "Todo 1",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "Todo 2",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "Todo 3",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    
]

// Middleware
app.use(express.json())


// Routes

// Get collection
app.get('/todos', (req, res) => {
    res.send(todosCollection)
})

// Get individual todo
app.get('/todos/:id', (req, res) => {
    const todoId = req.params.id
    const foundTodo = todosCollection.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// Post new todo
app.post('/todos', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todosCollection.push(newTodo)
    res.send(newTodo)
    
})


// Delete todo

app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id
    const updatedTodos = todosCollection.filter(todo => todo._id !== todoId)
    todosCollection = updatedTodos
    res.send(todosCollection)
})

// Edit Todo 
app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id
    const todoUpdates = req.body
    const updatedCollection = todosCollection.map(todo => todo._id === todoId ? {...todo, ...todoUpdates} : todo)
    res.send(updatedCollection)
})


// Server
app.listen(5000, () => {
    console.log('Listening at port 5000')
})