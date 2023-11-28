
const express = require('express');
const router = express.Router();
const search = require('../services/search');

module.exports = router;

  //for searching Listings
    router.get('/', async function(req, res, next) {
    try {
        console.log ("Rooms in Router = " + req.query.Rooms + "The Min and Max Price is "+ req.query.Min_Price + " " + req.query.Max_Price )
        res.json(await search.searchListing(req.query.Rooms, req.query.Bathrooms, req.query.Min_Price, req.query.Max_Price, req.query.Property_Type));
    } catch (err) {
      console.error(`Error while searching rental listings`, err.message);
      next(err);
    }
  });

