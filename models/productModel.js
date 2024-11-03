const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    price : Number,
    description : String,
    image : String,
    category : String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model( 'products', mySchema );