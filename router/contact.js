const express = require('express');
const router = express.Router();
const Contact = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            budget,
            message } = req.body;

        // Create a new contact entry
        const newContact = new Contact({
            name,
            email,
            phone,
            budget,
            message
        });

        // Save the contact to the database
        await newContact.save();

        res.status(200).json({
            message: 'Form submitted successfully',
            data: newContact
        });
    } catch (error) {
        console.error('Error saving contact data:', error);
        res.status(500).json({
            message: 'Error submitting form. Please try again later..'
        });
    }
});

module.exports = router;
