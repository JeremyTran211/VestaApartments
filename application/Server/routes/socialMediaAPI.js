const express = require('express');
const router = express.Router();
const socialMediaAPI = require('../services/socialMediaAPI');
module.exports = router;

//fucking works now its just getting the entire profile table
//testing for getting the profile associated with a user_id
router.get('/', async (req, res) =>{
    try {
        res.json(await socialMediaAPI.getProfile(req.query.page));
        
    } catch (error) {
        console.error('Error in testing social media api callback:', error.message);
        res.status(500).send('Error linking Twitter account.');
    }

})

//for updating the account type and socialMedia link
router.put('/:Profile_ID', async function(req,res,next){
    try {
        //unsure if correct parameters
        res.json(await socialMediaAPI.updateProfileInfo(req.params.profile_id, req.params.socialMediaAPI, req.params.Account_Type))
    } catch (error) {
        console.error('Error in updating accountType and SocialMedia link', error.message);
    }
})