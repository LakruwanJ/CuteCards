const express = require('express');
const connectDB = require('./db.js'); // Database connection file
const itemModel = require('./models/item.js'); // Mongoose model for items
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/', routes); // All routes will now be prefixed with "/"

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



