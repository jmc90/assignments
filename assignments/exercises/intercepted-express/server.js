const express = require('express')
const app = express()
const morgan = require('morgan')
const myMiddleware = require('./middleware')

const PORT = process.env.PORT || 8000


app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => myMiddleware(req, res, next))





app.post('/', (req, res) => {
    return res.send(req.body)
})



app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})