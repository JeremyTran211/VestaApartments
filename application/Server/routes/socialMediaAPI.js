const express = require('express');
const router = express.Router();
const login = require('../services/socialMediaAPI');

module.exports = router;

router.get('/twitter/login', (req, res) =>{
    //Update callback URL
    const callbackUrl = 'http://localhost:3000/socialMedia/twitter/callback';
    //Redirect user to Twitter login
    res.redirect('https://api.twitter.com/oauth/authenticate');
});

router.get('/instagram/login', (req, res) => {
    
    res.redirect('https://api.instagram.com/oauth/authorize');
  });

router.get('/twitter/callback', async (req, res) => {
    const userData = await getUserData('twitter', req.query.oauth_token, req.query.oauth_verifier);
    insertUserDataIntoDatabase(req.session.userId, 'twitter', userData);
    res.redirect('/profile');
});

router.get('/instagram/callback', async (req, res) => {
    const userData = await getUserData('instagram', req.query.code);
    insertUserDataIntoDatabase(req.session.userId, 'instagram', userData);
    res.redirect('/profile');
});

// Function to get user data from Twitter or Instagram
async function getUserData(platform, ...params) {
    // get user data using API calls to Twitter or Instagram
    
    return userData;
}

// Function to insert user data into the profile database
function insertUserDataIntoDatabase(userId, accountType, userData) {
    // insert user data into the profile database
   
}

