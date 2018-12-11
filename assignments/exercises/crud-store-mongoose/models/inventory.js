const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: Number,
    price: Number

})

module.exports = mongoose.model("InventoryModel", InventorySchema)