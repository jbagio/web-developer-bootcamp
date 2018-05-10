// Packages
const mongoose = require('mongoose');

// Mongoose / model config
mongoose.connect('mongodb://localhost/demoblogdb');

// Schemas
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model('Post', postSchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema] // embedded association
});
const User = mongoose.model('User', userSchema);

// create a user
const user = new User({
  name: 'Harry Potter',
  email: 'harry@hogwars.edu'
});

user.save((err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

// create a post with no associations
const post = new Post({
  title: 'I love strawberries',
  content: 'This is a true story. And you know it.'
});

post.save((err, post) => {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// retrieve existing user to add a post
User.findOne({name: 'Harry Potter'}, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    // add new post to retrieved user
    user.posts.push({
      title: 'Reflections on nothingness.',
      content: 'Sorry I am just too bored, hence this lame post!'
    });
    // save updated user
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
