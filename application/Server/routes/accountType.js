const express = require('express');
const router = express.Router();
const accountType = require('../services/accountType');

// Test function for getting the last changes in the Profile table
// http://localhost:3000/accountType
router.get('/', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const result = await accountType.getAccountTypes(page);
        res.json(result);
    } catch (error) {
        console.error('Error in testing Profile_ID, User_ID, Account_Type!', error.message);
        res.status(500).send('Error accessing!');
    }
});

// Update the account type if it is "Landlord" or "Renter" or "Delete"
router.put('/:User_ID', async (req, res) => {
    const User_ID = req.params.User_ID;
    const AccountType = req.body['AccountType'];
    try {
        const result = await accountType.updateDeleteAccountType(User_ID, AccountType);
        res.json(result);
    } catch (error) {
        console.error('Error updating Account_Type!', error.message);
        res.status(500).send('Error updating Account_Type!');
    }
});

module.exports = router;
