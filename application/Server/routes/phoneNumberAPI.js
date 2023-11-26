const express = require('express');
const router = express.Router();
const accountType = require('../services/phoneNumberAPI');

// Test function for getting the last changes in the Tier_Two_Varification table
// http://localhost:3000/phoneNumberAPI
router.get('/', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const result = await accountType.getPhoneNumbers(page);
        res.json(result);
    } catch (error) {
        console.error('Error in testing Phone_Number!', error.message);
        res.status(500).send('Error accessing!');
    }
});

// Update the phone number or Delete it from the database.
// If there is a phone number in the body, this function replaces it in the database.
// If the given phone number be "Delete",  
// this function removes the user's phone number from the database.
router.put('/:User_ID', async (req, res) => {

    const User_ID = req.params.User_ID;
    const PhoneNumber = req.body['PhoneNumber'];

    try {
        const result = await accountType.updateDeletePhoneNumber(User_ID, PhoneNumber);
        res.json(result);
    } catch (error) {
        console.error('Error updating Phone_Number:', error.message);
        res.status(500).send('Error updating Phone_Number!');
    }
});

module.exports = router;
