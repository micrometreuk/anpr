const mongoose = require('mongoose');

const MONGO_USERNAME = 'alpr';
const MONGO_PASSWORD = 'password';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'alpr';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=alpr`;

mongoose.connect(url, {useNewUrlParser: true});
