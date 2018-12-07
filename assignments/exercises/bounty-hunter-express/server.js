const express = require('express')
const app = express()
const uuid = require('uuid/v4')

const bountiesCollection = [
    {
        firstName: "Dude 1 first",
        lastName: "Dude 1 last",
        living: true,
        bountyAmount: 200,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Dude 2 first",
        lastName: "Dude 2 last",
        living: true,
        bountyAmount: 200,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Dude 3 first",
        lastName: "Dude 3 last",
        living: true,
        bountyAmount: 200,
        type: "Sith",
        _id: uuid()
    }
]

// Middleware
app.use(express.json())

// Get collection
app.get('/bounties', (req, res) => {
    res.send(bountiesCollection)
})

// Get individual bountie
app.get('/bounties/:id', (req, res) => {
    const id = req.params.id
    const foundBountie = bountiesCollection.find(bountie => bountie._id === id)
    res.send(foundBountie)
})

// Post new bountie
app.post('/bounties', (req, res) => {
    const newBountie = req.body
    newBountie._id = uuid()
    bountiesCollection.push(newBountie)
    res.send(bountiesCollection)
    
})

// Server
app.listen(7000, () => {
    console.log('Listening at port 7000')
})