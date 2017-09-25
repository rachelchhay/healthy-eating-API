const express = require('express');
const router = express.Router();
const Posts = require('../models/posts.js');

router.get('/', (req, res) => {
  Posts.find((err, foundPosts) => {
    if(err)
      res.send(err);
    else res.json(foundPosts);
  });
});

router.get('/search', (req, res) => {
  console.log(res);
});

router.post('/', (req,res) => {
  Posts.create(req.body, (err, createdPost) => {
    res.json(createdPost);
  });
});

router.put('/:id', (req, res) => {
  Posts.findById(req.params.id, (err, foundPost) => {
    if(err)
      res.send(err);
    // ternary statement
    (req.body.title) ? foundPost.title = req.body.title : null;
    (req.body.servings) ? foundPost.servings = req.body.servings : null;
    (req.body.time) ? foundPost.time = req.body.time : null;
    (req.body.ingredients) ? foundPost.ingredients = req.body.ingredients : null;
    (req.body.directions) ? foundPost.directions = req.body.directions : null;
    (req.body.author) ? foundPost.author = req.body.author : null;
    foundPost.save((err, updatedPost) => {
      if(err)
        res.send(err);
      else res.json(updatedPost)
    });
  });
});

router.delete('/:id', (req, res) => {
  Posts.findByIdAndRemove(req.params.id, (err, deletedPost) => {
    if(err)
      res.send(err);
    else res.json(deletedPost);
  });
});


module.exports = router;
