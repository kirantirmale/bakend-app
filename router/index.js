const express = require('express');
const router = express.Router();

// Import user routes
const userRoutes = require('./user');

// Use user routes under `/user`
router.use('/user', userRoutes);

module.exports = router;
