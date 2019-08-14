const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    url: { type: String, require: true, index: { unique: true } },
    status: { type: String, enum: ['created', 'updated', 'modernize'], require: true },
    name: String,
    headline: String,
    location: String,
    summary: String,
    positions: [{
        _id: false,
        title: { type: String },
        company: { type: String },
        description: { type: String },
        date1: { type: String },
        date2: { type: String },
        roles: [{
            _id: false,
            title: { type: String },
            company: { type: String },
            description: { type: String },
            date1: { type: String },
            date2: { type: String },
        }]
    }],
    educations: [{
        _id: false,
        title: String,
        degree: String,
        date1: Date,
        date2: Date
    }],
    skills: [{
        _id: false,
        title: String,
        count: Number
    }],
    search: [
        {
            _id: false,
            position: String,
            location: String
        }
    ],
    date: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Perfil', modelSchema);