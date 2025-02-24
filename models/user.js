const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
    budget: { type: String, required: false },
    message: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('contacts', userSchema);
