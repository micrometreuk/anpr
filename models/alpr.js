const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Alpr = new Schema ({
        plate: { type: String},
        uuid: { type: String},
        date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Alpr', Alpr)
