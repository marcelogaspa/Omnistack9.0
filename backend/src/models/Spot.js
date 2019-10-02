const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.type.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SportSchema);