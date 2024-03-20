const express = require('express');
const uploadRoutes = require('./routes/upload');
const laptopRoutes = require('./routes/laptops');
const userRoutes = require('./routes/users');
const connectDB = require('./config/db');

const app = express();
app.get('/', function(req, res) {
    res.send('Hello World!');
  });  

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // for parsing application/json
app.use('/api/upload', uploadRoutes);
app.use('/api/laptops', laptopRoutes);
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/admin', express.static('client/public')); // corrected path for admin.html

// Other routes and middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
