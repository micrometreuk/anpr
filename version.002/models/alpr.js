const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alpr = new Schema ({
        plate: { type: String, required: true },
});
module.exports = mongoose.model('Alpr', Alpr)
