const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Alpr = new Schema ({
        plate: { type: String},
        uuid: { type: String},
        date: { type: Date, default: Date.now },
        epoch_time: { type: String}

});

module.exports = mongoose.model('Alpr', Alpr)
