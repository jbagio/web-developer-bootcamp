const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
  isCute: Boolean
});

const Cat = mongoose.model('Cat', catSchema);

const maria = new Cat({
  name: 'Maria',
  age: 8,
  temperament: 'relaxed',
  isCute: true
});

const tuna = new Cat({
  name: 'Tuna',
  age: 3,
  temperament: 'evil',
  isCute: false
});

// just a wrapper around .save()
function saveCat (cat) {
  // this is the mongoose function - save() a new cat to the db
  cat.save((error, cat) => {
    if (error) {
      console.log(error);
    } else {
      console.log(cat);
    }
  });
}

// saveCat(maria);
// saveCat(tuna);

// create a new cat and save it all in one go
Cat.create({
  name: 'Chickpea',
  age: 12,
  temperament: 'crazy',
  isCute: true
}, (err, cat) => {
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

// retrieve cats from the db
Cat.find((err, cats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(cats);
  }
});
