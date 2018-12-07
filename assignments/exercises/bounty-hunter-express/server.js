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

// Get individual bounty
app.get('/bounties/:id', (req, res) => {
    const id = req.params.id
    const foundBounty = bountiesCollection.find(bounty => bounty._id === id)
    res.send(foundBounty)
})

// Post new bounty
app.post('/bounties', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bountiesCollection.push(newBounty)
    res.send(bountiesCollection)
    
})

// Edit bounty
app.put('/bounties/:id', (req, res) => {
    const bountyId = req.params.id
    const bountyUpdates = req.body
    const updatedCollection = bountiesCollection.map(bounty => bounty._id === bountyId ? {...bounty, ...bountyUpdates} : bounty)
    res.send(updatedCollection)
})

// Server
app.listen(7000, () => {
    console.log('Listening at port 7000')
})