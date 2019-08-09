const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        position: { type: String, require: true },
        location: { type: String, require: true },
        status: { type: String, enum: ['create', 'process', 'finish'], require: true },
        date: { type: Date, default: Date.now },
    }
);

module.exports = mongoose.model('Search', schema);
