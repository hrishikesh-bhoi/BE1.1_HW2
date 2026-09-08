const mongoose = require('mongoose');

const acSchema = new mongoose.Schema({
    brand: String,
    name: String,
    description: String,
    imageUrl: String,
    rating: Number,
    ratingCount: Number,
    reviewCount: Number,
    price: Number,
    originalPrice: Number,
    discount: Number,
    wifiConnectivity: Boolean,
    warranty: String,
    offers: [String],

});

const Ac = mongoose.model("Ac", acSchema);
module.exports = Ac;