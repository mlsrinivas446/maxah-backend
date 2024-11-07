const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number },
    category: { type: String },
    image: { type: String },
    tags: { type: [String] },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product