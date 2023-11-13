
const express = require('express');
const router = express.Router();
const screening = require('../services/screening.js');

module.exports = router;

  //for renter screening
    router.get('/', async function(req, res, next) {
    try {
      res.json(await screening.renterScreening(req.query.Status, req.query.Credit_Score, req.query.Income, req.query.Saved_Properties_ID));
    } catch (err) {
      console.error(`Error while searching renter screening`, err.message);
      next(err);
    }
  });