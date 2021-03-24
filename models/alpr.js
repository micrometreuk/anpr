const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alpr = new Schema ({
        plate: { type: String},
});
module.exports = mongoose.model('Alpr', Alpr)
