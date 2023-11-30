const express = require('express');
const router = express.Router();
const locationListingAPI = require('../services/locationListingAPI.js');

module.exports = router;

// Fetch location of rental listing for the given Region Name
router.get('/', async function(req, res, next) {
    
  try {
    const page = req.query.page || 1;
    res.json(await locationListingAPI.locationListing(req.query.RegionName, page));
  } catch (err) {
    console.error(`Error while searching location of rental listings:`, err.message);
    res.status(500).send('Error searching for location of rental listings!');
  }
  }
);
