const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dbadmin = new Schema ({
        plate: { type: String},
});
module.exports = mongoose.model('Dbadmin', Dbadmin)
