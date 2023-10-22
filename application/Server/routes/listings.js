const express = require('express');
const router = express.Router();
const listings = require('../services/listings');
const registered_user = require('../services/users');

module.exports = router;

// for getting the listings
router.get('/', async function(req, res, next) {
  try {
    res.json(await listings.getListings(req.query.page));
  } catch (err) {
    console.error(`Error while getting listings from database `, err.message);
    next(err);
  }
});

// for updating the listings
router.put('/:listing_id', async function(req, res, next) {
  try {
    res.json(await listings.updateListing(req.params.listing_id, req.body));
  } catch (err) {
    console.error(`Error while updating rental listings`, err.message);
    next(err);
  }
});

// for deleting listings
router.delete('/:listing_id', async function(req, res, next) {
  try {
    res.json(await listings.removeListing(req.params.listing_id));
  } catch (err) {
    console.error(`Error while deleting Listing`, err.message);
    next(err);
  }
});
