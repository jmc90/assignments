const express = require('express')
const app = express()
const uuid = require('uuid/v4')

// Simulated Database of Todos
const todosCollection = [
    {
        "name": "Todo 1",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        "_id": uuid()
    },
    {
        "name": "Todo 2",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        "_id": uuid()
    },
    {
        "name": "Todo 3",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        "_id": uuid()
    },
    
]

// Middleware
app.use(express.json())

