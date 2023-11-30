const express = require('express');
const router = express.Router();
const check = require('../services/backgroundCheck');

module.exports = router;

// for getting the background checks
router.get('/', async function(req, res, next) {
    try {
      res.json(await check.getBackgroundCheck(req.query.page));
    } catch (err) {
      console.error(`Error while getting Background Check from database `, err.message);
      next(err);
    }
  });

  // for deleting background checks
  router.delete('/:report_id', async function(req, res, next) {
    try {
      res.json(await check.removeBackgroundCheck(req.params.report_id));
    } catch (err) {
      console.error(`Error while deleting Background Check`, err.message);
      next(err);
    }
  });
  
  //for creating a background check
  router.post('/', async function(req, res, next) {
    try {
      res.json(await check.createBackgroundCheck(req.body));
    } catch (err) {
      console.error(`Error while creating a new Background Check`, err.message);
      next(err);
    }
  
  
  });
  