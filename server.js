const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const studentRoutes = require('./routes/studentRoutes');
const fileUpload = require('express-file');

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

// MongoDB connection (replace with your MongoDB URI)
const mongoURI = 'mongodb+srv://mehedinahi:<12345>@mern6taskapi.j4pho.mongodb.net/'; 

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use student routes
app.use('/api/student', studentRoutes);

// Set up static folder for file uploads
app.use('/uploads', express.static('uploads'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
