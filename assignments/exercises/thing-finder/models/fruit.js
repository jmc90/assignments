const mongoose = require('mongoose')

const FruitSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        lowercase: true
    },
    brand: {
        type: String,
        lowercase: true
    },
    price: Number

})

module.exports = mongoose.model("FruitModel", FruitSchema)