const express = require('express');
const router = express.Router();
const searchBar = require('../services/searchBar');

module.exports = router;

// Location_ID | Region_ID | Address   | Coordinates   
// for getting the listings from the searchbar
router.get('/', async function(req, res, next) {
  try {
    console.log ("The Zipcdoe is = " + req.query.Region_ID + ", The Address is "+ req.query.Address)
    res.json(await searchBar.retrieveListings(req.query.Region_ID, req.query.Address));

  } catch (err) {
    console.error(`Error while getting listings from database for search bar`, err.message);
    next(err);
  }
});
