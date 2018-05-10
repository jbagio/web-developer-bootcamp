// Packages
const mongoose = require('mongoose');

// Mongoose / model config
mongoose.connect('mongodb://localhost/demoblog2db');

// model imports
const Post = require('./models/post');
const User = require('./models/user');

// create a user
// const newUser = new User({
//   name: 'Hermione Granger',
//   email: 'hermione@hogwarts.edu'
// });
// user.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('created user');
//   }
// });

// now create a post and add it to the user immediately afterwards
createUserPost('hermione@hogwarts.edu', 'I love strawberries pt8', 'blah blah blah blah');
createUserPost('hermione@hogwarts.edu', 'I love strawberries pt9', 'blah blah blah blah');
createUserPost('hermione@hogwarts.edu', 'I love strawberries pt10', 'blah blah blah blah');

// create a post and add it to the user immediately afterwards
function createUserPost (email, title, content) {
  Post.create({
    title: title,
    content: content
  }, (err, post) => {
    if (err) {
      throw err;
    }
    // get the user to associate the post to
    User.findOne({email: email}, (err, user) => {
      if (err) {
        throw err;
      }
      // associate the post to the user and save
      user.posts.push(post);
      user.save((err, user) => {
        if (err) {
          throw err;
        }
        console.log('Saved user post');
        // retrieve user with posts property fully popupaled, ie not just the ids
        // note: this should be run in a callback sequence after users and posts are created for the first time
        // they might not exist yet!
        User.findOne({email: email}).populate('posts').exec((err, final) => {
          if (err) {
            throw err;
          }
          console.log(final);
        });
      });
    });
  });
}
