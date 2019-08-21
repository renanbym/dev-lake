import mongoose, { Schema } from 'mongoose';
mongoose.Promise = require('bluebird');
const modelSchema = new Schema(
    {
        position: { type: String, require: true },
        location: { type: String, require: true },
        status: { type: String, enum: ['create', 'process', 'finish'], require: true },
        date: { type: Date, default: Date.now },
    }
);

global.modelSchema = global.modelSchema || mongoose.model('Search', modelSchema);
module.exports = global.modelSchema;