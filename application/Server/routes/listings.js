const express = require('express');
const router = express.Router();
const listings = require('../services/listings');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await listings.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting listings from database `, err.message);
    next(err);
  }
});

module.exports = router;