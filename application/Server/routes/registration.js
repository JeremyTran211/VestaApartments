/* 
 Registration Router

 The route handles users registration. When a POST request is made to this endpoint
 then it'll check to make sure the email isn't in use. If it isn't then insert the 
 user's info in the database for login. 
*/
const express = require('express');
const router = express.Router();
const registrationService = require('../services/registration'); 

module.exports = router;


router.post('/', async (req, res) => {
    try {
        console.log('Input Values:', req.body); 
        const { email, password, firstName, lastName } = req.body;

        const registrationResult = await registrationService.registerUser(email, password, firstName, lastName);
        console.log('Values to insert:', email, password, firstName, lastName);
        
        if (registrationResult.success) {
            res.status(200).json(registrationResult);

        } else {
            res.status(400).json(registrationResult);
        }
    } catch (err) {
        console.error('Error in registration route:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});
