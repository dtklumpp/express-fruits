const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitSchema = new Schema({
    name: {type: String, required: true},
    color: String,
    readyToEat: Boolean
})

const FruitMod = mongoose.model('Fruit', fruitSchema);
module.exports = FruitMod;

