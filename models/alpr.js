const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alpr = new Schema ({
        plate:  String,
        uuid:   String
});
module.exports = mongoose.model('Alpr', Alpr)
