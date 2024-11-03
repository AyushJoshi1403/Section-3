const { model, Schema } = require('../connection');

const mySchema = new Schema({
    caption : String,
    image : String,
    likes : { type: Number, default: 0 },
    share : { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model( 'post', mySchema );