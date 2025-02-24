require('dotenv').config();
require('./config/db'); // Ensure DB is connected before starting the app

const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./router/index');
const { errorHandler } = require('./utils/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// CORS Configuration
app.use(cors({ origin: "*" }));

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api', router); // Routes
app.use(errorHandler); // Global error handling middleware

// Serve Static HTML Files
app.use(express.static(path.join(__dirname, 'public')));

// Default Route (Serve HTML Page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(port, () => {
    console.log(`✅ Server running at: http://localhost:${port}`);
});
