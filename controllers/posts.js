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

router.post('/', (req,res) => {
  Posts.create(req.body, (err, createdPost) => {
    res.json(createdPost);
  });
});





module.exports = router;
