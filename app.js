require('./config/db'); // Ensure database is connected before anything else

const express = require('express');
const cors = require('cors');
const router = require('./router/index');
const { errorHandler } = require('./utils/errorHandler');

const app = express();
const port = 3000;

// CORS Configuration
const corsOptions = {
    origin: "*", // Allow all origins (adjust as needed)
    methods: "GET,POST,PUT,DELETE", // Allowed methods
    allowedHeaders: "Content-Type,Authorization" // Allowed headers
};
app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON requests

app.use('/api', router); // Routes

app.use(errorHandler); // Global error handling middleware

// Start server after database connection is successful
app.listen(port, () => {
    console.log(`✅ Server running at: http://localhost:${port}`);
});
