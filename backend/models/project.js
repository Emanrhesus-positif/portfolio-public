const mongoose = require('mongoose');
const user = require('./user');

const projectSchema = mongoose.Schema({
    userId: {type: String, required: false},
    title: { type: String, required: false },
    description: { type: String, required: false },
    imageUrl: { type: String, required: false },
    gitHubUrl: { type: String, required: false },
});

module.exports = mongoose.model('Project', projectSchema);
