const mongoose = require('mongoose')

const FruitSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    quantity: Number,
    price: Number

})

module.exports = mongoose.model("FruitModel", FruitSchema)