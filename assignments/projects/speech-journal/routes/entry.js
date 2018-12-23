const express = require('express')
const entryRouter = express.Router()
const Entry = require('../models/entry')

// get all. delete this after
entryRouter.get('/', (req, res, next) => {
    Entry.find((err, entries)=> {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(entries)
    })
})

entryRouter.get('/:userId', (req, res, next) => {
    Entry.find({user: req.params.userId}, (err, userEntries)=> {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userEntries)
    })
})


// ask nate why it didnt work with just entry id
entryRouter.get('/:userId/:entryId', (req, res, next) => {
    Entry.findOne({user: req.params.userId, _id: req.params.entryId}, (err, entry) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(entry)
    })
})

entryRouter.post('/:userId', (req, res, next) => {
    const newEntry = new Entry(req.body)
    newEntry.user = req.params.userId
    newEntry.save((err, entry) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(entry)
    })
})

entryRouter.delete('/:entryId', (req, res, next) => {
    Entry.findOneAndDelete({_id: req.params.entryId}, (err, deletedEntry) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send("Successfully deleted entry!")
    })
})

module.exports = entryRouter