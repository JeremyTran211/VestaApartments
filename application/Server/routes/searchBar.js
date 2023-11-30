const express = require('express');
const router = express.Router();
const searchBar = require('../services/searchBar');

module.exports = router;

// Location_ID | Region_ID | Address   | Coordinates   
// for getting the listings from the searchbar
router.get('/', async function(req, res, next) {
  try {
    console.log ("The Zipcode is = " + req.query.searchParam + ", The Address is "+ req.query.searchParam)
    res.json(await searchBar.retrieveListings(req.query.searchParam));

  } catch (err) {
    console.error(`Error while getting listings from database for search bar`, err.message);
    next(err);
  }
});
