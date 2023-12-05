const express = require('express');
const router = express.Router();
const map = require('../services/map');

module.exports = router;

router.get('/', async function(req, res, next) {
  try {
    console.log ("The Zipcode is = " + req.query.searchParam)
    res.json(await map.retrieveListings(req.query.searchParam));

  } catch (err) {
    console.error(`Error while getting listings from database for search bar`, err.message);
    next(err);
  }
});