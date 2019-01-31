const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: {type: String, required: true, max: [128,'Too long, max is 128 Characters']},
    city: {type: String, required: true, lowercase: true},
    street: {type: String, required: true, min: [4,'Too short, min is 4 characters']},
    category: {type: String, required: true, lowercase: true},
    bedrooms: Number,
    shared: Boolean,
    description: {type: String, requiured: true},
    dailyRate: Number,
    createdAt: { type: Date, default: Date.now},
    image: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Rental',rentalSchema);