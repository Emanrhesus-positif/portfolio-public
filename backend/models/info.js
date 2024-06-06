const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Info', infoSchema);
