const express = require('express');
const router = express.Router();
const users = require('../services/users');

module.exports = router;

//for creating users
router.post('/', async function(req, res, next) {
  try {
    res.json(await users.createUser(req.body));
  } catch (err) {
    console.error(`Error while creating a new User`, err.message);
    next(err);
  }
});


// for getting the users
router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getUsers(req.query.page));
  } catch (err) {
    console.error(`Error while getting Users from database `, err.message);
    next(err);
  }
});

// for updating the users
router.put('/:user_id', async function(req, res, next) {
  try {
    res.json(await users.updateUser(req.params.user_id, req.body));
  } catch (err) {
    console.error(`Error while updating registered User`, err.message);
    next(err);
  }
});


// for deleting a user
router.delete('/:user_id', async function(req, res, next) {
  try {
    res.json(await users.removeUser(req.params.user_id));
  } catch (err) {
    console.error(`Error while deleting User`, err.message);
    next(err);
  }
});


// for login the user
router.login('/:user_email', async function(req, res, next) {
  try {
    res.json(await users.loginUser(req.params.user_email, req.body));
  } catch (err) {
    console.error(`Error while login user`, err.message);
    next(err);
  }
});