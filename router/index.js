const express = require('express');
const router = express.Router();
const userRoutes = require('./user'); // Ensure correct path

router.use('/user', userRoutes);

module.exports = router;
