const mongoose = require('mongoose');
mongoose.connect('mongodb://root:example@localhost:27017/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
