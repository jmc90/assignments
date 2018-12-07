const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("Hello World!!!")
})




// URL:  www.google.com/photos?type=nike&size=9
// ENDPOINT: /photos
// QUERY:    ?key=value   => Filtering data from database
// PARAMS:   Requesting a specific item from db


// DATA IN A DATABASE
    // Collection: Todos
    // Resource:   Todo




// app listen is usually last
app.listen(8000, () => {
    console.log(`Server is running on Port 8000`)
})