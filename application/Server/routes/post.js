const express = require('express');
const router = express.Router();
const posts = require('../services/post');

module.exports = router;


// for getting the posts
router.get('/', async function(req, res, next) {
  try {
    res.json(await posts.getPosts(req.query.page));
  } catch (err) {
    console.error(`Error while getting posts from database `, err.message);
    next(err);
  }
});

// for updating the posts
router.put('/:post_id', async function(req, res, next) {
  try {
    res.json(await posts.updatePost(req.params.post_id, req.body));
  } catch (err) {
    console.error(`Error while updating posts `, err.message);
    next(err);
  }
});

// for deleting listings
router.delete('/:post_id', async function(req, res, next) {
  try {
    res.json(await posts.removePost(req.params.post_id));
  } catch (err) {
    console.error(`Error while deleting post`, err.message);
    next(err);
  }
});

//for creating listings
router.post('/', async function(req, res, next) {
  try {
    res.json(await posts.createPost(req.body));
  } catch (err) {
    console.error(`Error while creating a new post`, err.message);
    next(err);
  }
});
