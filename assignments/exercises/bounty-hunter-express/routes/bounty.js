const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

// Get collection
bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

// Get individual bounty
bountyRouter.get('/:id', (req, res, next) => {
    Bounty.findOne({_id: req.params.id}, (err, bounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

// Post new bounty
bountyRouter.post('/', (req, res) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, bounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(bounty)
    })
})

//Delete bounty
bountyRouter.delete('/:id', (req, res) => {
    Bounty.findOneAndDelete({_id: req.params.id}, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send("Successfully deleted bounty")
    })
})

// Edit bounty
bountyRouter.put('/:id', (req, res) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true},
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        })
})

module.exports = bountyRouter