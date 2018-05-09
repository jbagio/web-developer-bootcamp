// Packages
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// App config
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
const port = process.env.PORT || 3000;

// Mongoose / model config
mongoose.connect('mongodb://localhost/restfulblogdb');
// Schema
const blogPostSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

app.get('/', (req, res) => res.redirect('/blog-posts'));

// RESTful routes
// Index
app.get('/blog-posts', (req, res) => {
  BlogPost.find({}, (err, blogPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {blogPosts: blogPosts});
    }
  });
});

// New
app.get('/blog-posts/new', (req, res) => {
  res.render('new.ejs');
});

// Create
app.post('/blog-posts', (req, res) => {
  if (!req.body) {
    return res.sendStatus('400');
  }
  // add new blog post to the DB
  BlogPost.create(req.body.blogPost, (err, blogPost) => {
    if (err) {
      console.log(err);
      res.render('new');
    } else {
      res.redirect('/blog-posts');
    }
  });
});

// Show
app.get('/blog-posts/:id', (req, res) => {
  // get blog post from db
  BlogPost.findById(req.params.id, (err, blogPost) => {
    if (err) {
      res.redirect('/blog-posts');
    } else {
      res.render('show', {blogPost: blogPost});
    }
  });
});

// Edit
app.get('/blog-posts/:id/edit', (req, res) => {
  // get blog post from db
  BlogPost.findById(req.params.id, (err, blogPost) => {
    if (err) {
      res.redirect('/blog-posts');
    } else {
      res.render('edit', {blogPost: blogPost});
    }
  });
});

// Update
app.put('/blog-posts/:id', (req, res) => {
  BlogPost.findByIdAndUpdate(req.params.id, req.body.blogPost, (err, blogPost) => {
    if (err) {
      res.redirect('/blog-posts');
    } else {
      res.redirect(`/blog-posts/${req.body.blogPost}`); //can also use blogPost._id
    }
  });
});

// Delete
app.delete('/blog-posts/:id', (req, res) => {
  BlogPost.findByIdAndRemove(req.params.id, (err, blogPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/blog-posts/');
    }
  });
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`))
