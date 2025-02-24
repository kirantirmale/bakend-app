require('dotenv').config();
require('./config/db'); 
const express = require('express');
const cors = require('cors');
const path = require('path');
const { errorHandler } = require('./utils/errorHandler');
const contactRoutes = require('./router/contact');

const app = express();
const port = process.env.PORT || 3000;

// CORS Configuration
app.use(cors({ origin: "*" }));

app.use(express.json()); // Middleware to parse JSON requests

app.use('/api/contact', contactRoutes);
app.use(errorHandler); // Global error handling middleware

// Serve Static HTML Files
app.use(express.static(path.join(__dirname, 'public')));

// Default Route (Serve HTML Page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`✅ Server running at: http://localhost:${port}`);
});
