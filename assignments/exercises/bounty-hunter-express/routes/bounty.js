const express = require('express')
const planetRouter = express.Router()
const Bounty = require('../models/bounty')

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
    res.send(newBounty)
    
})

//Delete bounty
app.delete('/bounties/:id', (req, res) => {
    const bountyId = req.params.id
    const updatedBounties = bountiesCollection.filter(bounty => bounty._id !== bountyId)
    bountiesCollection = updatedBounties
    res.send(bountiesCollection)
})

// Edit bounty
app.put('/bounties/:id', (req, res) => {
    const bountyId = req.params.id
    const bountyUpdates = req.body
    const updatedCollection = bountiesCollection.map(bounty => bounty._id === bountyId ? {...bounty, ...bountyUpdates} : bounty)
    res.send(updatedCollection)
})
