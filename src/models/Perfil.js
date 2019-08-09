const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    url: { type: String, require: true },
    status: { type: String, enum: ['created', 'updated', 'modernize'], require: true },
    name: String,
    headline: String,
    location: String,
    summary: String,
    positions: [{
        title: { type: String },
        company: { type: String },
        description: { type: String },
        date1: { type: String },
        date2: { type: String },
        roles: [{
            title: { type: String },
            company: { type: String },
            description: { type: String },
            date1: { type: String },
            date2: { type: String },
        }]
    }],
    educations: [{
        title: String,
        degree: String,
        date1: Date,
        date2: Date
    }],
    skills: [{
        title: String,
        count: Number
    }],
    date: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Perfil', modelSchema);