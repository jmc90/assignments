const express = require('express')
const fruitRouter = express.Router()
const Fruit = require('../models/fruit')


fruitRouter.get('/', (req, res) => {
    console.log(req.query)
    const q = req.query
    if(q.type) {
        Fruit.find({type: q.type}, (err, data) => {
            if (err) {
                console.log(err)
            }
            return res.status(200).send(data)
        })
    } else if (q.minprice && q.maxprice) {
        Fruit.find({ price: { $gt: q.minprice, $lt: q.maxprice } } , (err, data) => {
            if (err) {
                console.log(err)
            }
            return res.status(200).send(data)
        })
    } else {
        Fruit.find((err, data) => {
            if(err) {
                console.log(err)
            }
            return res.status(200).send(data)
        })
    }
   
})

// Get one 
fruitRouter.get('/:id', (req, res) => {
    Fruit.findOne({_id: req.params.id}, (err, item) => {
        if (err) {
            console.log(err)
        }
        return res.status(200).send(item)
    })
})


// Post
fruitRouter.post('/', (req, res) => {
    const newItem = new Fruit(req.body)
    newItem.save((err, item) => {
        if(err) {
            console.log(err)
        }
        return res.status(201).send(item)
    })
})

// Put

fruitRouter.put('/:id', (req, res) => {
    Fruit.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedItem) => {
        if (err) { 
            console.log(err)
        }
        return res.status(201).send(updatedItem)
    })
})

// Delete
fruitRouter.delete('/:id', (req, res) => {
    Fruit.findOneAndDelete(
        {_id: req.params.id}, 
        (err, deletedItem) => {
        if (err) {
            console.log(err)
        }
        return res.status(202).send("Successfully deleted that item")
    })
})

module.exports = fruitRouter