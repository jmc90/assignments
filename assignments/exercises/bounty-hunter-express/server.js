const express = require('express')
const app = express()


// Middleware
app.use(express.json())
app.use(morgan('dev'))

//Server routes
app.use('/bounties', require('./routes/bounty'))

mongoose.connect('mongodb://localhost:27017/bountydatabase', {useNewUrlParser: true}, () => {
    console.log("connected to the db")
})



// Server
app.listen(7000, () => {
    console.log('Listening at port 7000')
})