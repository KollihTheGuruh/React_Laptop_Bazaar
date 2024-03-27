const express = require('express');
const uploadRoutes = require('./routes/upload');
const laptopRoutes = require('./routes/laptops');
const userRoutes = require('./routes/users');
const connectDB = require('./config/db');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
app.get('/', function(_req, res) {
    res.send('Hello World!');
  });  

  const cors = require('cors');
  app.use(cors());
  
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
  // Connect to the database
connectDB();
    console.log(`Server is running on port ${PORT}`);
});
