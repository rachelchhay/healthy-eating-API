const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  servings: Number,
  time: String,
  ingredients: String,
  directions: String,
  author: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
