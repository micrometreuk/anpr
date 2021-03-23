const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alpr = new Schema ({
        plate: { type: String, required: false },
        uuid: { type: String, required: false }
});
module.exports = mongoose.model('Alpr', Alpr)
