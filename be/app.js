const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use(cors())

// Routes
app.use('/users', userRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/user_management')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
