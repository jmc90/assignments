const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')



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
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send( { user: user.toObject(), token } )
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
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({ user: user.toObject(), token })
    })
})


module.exports = authRouter