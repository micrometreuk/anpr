require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

/* Connect to MongoDB to localhost
mongoose.connect('mongodb://root:example@localhost:27017/')
Connect to MongoDB in Docker
mongoose.connect('mongodb://root:example@localhost:27017/')
mongoose.connect('mongodb://mongo:27017/your_database_name')*/
mongoose.connect('mongodb://mongo:27017/your_database_name')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a simple schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// Sample route
app.get('/', async (req, res) => {
  try {
    const users = await User.find(); 
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});