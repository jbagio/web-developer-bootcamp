// Packages
const mongoose = require('mongoose');

// Schemas
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('Post', postSchema);
