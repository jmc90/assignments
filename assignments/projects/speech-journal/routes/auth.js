const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')


// delete this 
authRouter.get('/', (req, res, next) => {
    User.find((err, users) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

authRouter.post('/register', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(500)
            return next(new Error("That username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(user)
        })
    })
})

authRouter.post('/signin', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if(!user || user.password !== req.body.password){
            res.status(500)
            return next(new Error("Username or Password are incorrect"))
        }
        return res.status(200).send(user)
    })
})


module.exports = authRouter