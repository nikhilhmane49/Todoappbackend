const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },

    description: {
        type: String,
        required: true,
        maxLength: 50,
    },

    createat: {
        type: Date,
        required: true,
        default: Date.now(),
    },

    updateat: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

module.exports = mongoose.model("todo", todoschema);