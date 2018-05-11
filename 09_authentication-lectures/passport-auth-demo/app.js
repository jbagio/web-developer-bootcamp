// Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// Project imports
const User = require('./models/user');

// App config
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;

// Passport config
app.use(require('express-session')({
  secret: 'Y u no use a better secret?',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Db config
mongoose.connect('mongodb://localhost/passportdemodb');

// Routes
app.get('/', (req, res) => res.render('home'));

app.get('/secret', isLoggedIn, (req, res) => res.render('secret'));

// Auth routes
app.get('/register', (req, res) => res.render('register'));

app.post('/register', (req, res) => {
  // call passport's .register to create user with hashed password and save it to the db
  User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register');
    }
    // authenticate the user and set all needed session params
    passport.authenticate('local')(req, res, () => res.redirect('/secret'));
  });
});

// Login routes
app.get('/login', (req, res) => res.render('login'));

app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login'
}), (req, res) => {
});

app.get('/logout', (req, res) => {
  // logout the user and destroy all needed session params
  req.logout();
  res.render('/');
});

// middleware to check if user is authenticated
function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('login');
}

// Logout routes
// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
