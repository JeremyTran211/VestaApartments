const express = require('express');
const router = express.Router();
const login = require('../services/login');

module.exports = router;
 //for logging in users
 router.get('/', async function(req, res, next) {
    try {
      console.log ("Email and password = " + req.query.Email + " " + req.query.Password)
      res.json(await login.loginUser(req.query.Email, req.query.Password));
      /*console.log ('Message returned from database call ' , res.message);
      if (res.message = "No rows returned for user search in database") {
        return ""; 
      }
      */
     //return "";
    } catch (err) {
      console.error(`Error while searching for email and password in Registered_User database`, err.message);
      next(err);
    }
  });

