const express = require('express')
const entryRouter = express.Router()
const Entry = require('../models/entry')

entryRouter.get('/:userId', (req, res, next) => {
    Entry.find({user: req.params.userId}, (err, userEntries)=> {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userEntries)
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

module.exports = entryRouter