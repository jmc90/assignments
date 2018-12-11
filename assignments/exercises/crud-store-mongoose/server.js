const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))


app.use('/inventory', require('./routes/inventory'))

mongoose.connect('mongodb://localhost:27017/firstdatabase', {useNewUrlParser: true}, () => {
    console.log('connected to the db')
})


app.listen(8000, () => {
    console.log(`[+] Server is running on port 8000`)
})