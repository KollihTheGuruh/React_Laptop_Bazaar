const express = require('express');
const uploadRoutes = require('./routes/upload');
const laptopRoutes = require('./routes/laptops');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use('/api/upload', uploadRoutes);
app.use('/api/laptops', laptopRoutes);
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('uploads'));

// Add more middleware and routes as needed...

module.exports = app;
