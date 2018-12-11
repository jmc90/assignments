const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

// Get All
inventoryRouter.get('/', (req, res) => {
    Inventory.find((err, data) => {
        if(err) {
            console.log(err)
        }
        return res.status(200).send(data)
    })
})

// Get one 
inventoryRouter.get('/:id', (req, res) => {
    Inventory.findOne({_id: req.params.id}, (err, item) => {
        if (err) {
            console.log(err)
        }
        return res.status(200).send(item)
    })
})

// Post
inventoryRouter.post('/', (req, res) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, item) => {
        if(err) {
            console.log(err)
        }
        return res.status(201).send(item)
    })
})

// Put

inventoryRouter.put('/:id', (req, res) => {
    Inventory.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedItem) => {
        if (err) { 
            console.log(err)
        }
        return res.status(201).send(updatedItem)
    })
})

// Delete
inventoryRouter.delete('/:id', (req, res) => {
    Inventory.findOneAndDelete(
        {_id: req.params.id}, 
        (err, deletedItem) => {
        if (err) {
            console.log(err)
        }
        return res.status(202).send("Successfully deleted that item")
    })
})

module.exports = inventoryRouter