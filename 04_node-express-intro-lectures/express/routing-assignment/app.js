const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => res.send('Hi there, welcome to my assignment!'));

app.get('/speak/:animal', (req, res) => {
  const sounds = {
    'pig': 'Oink',
    'cow': 'Moo',
    'dog': 'Woof Woof'
  };
  const animal = req.params.animal.toLowerCase();

  if (sounds[animal] === undefined) {
    res.send('Y u no pick another animal?');
  } else {
    res.send(`The ${animal} says '${sounds[animal]}'`);
  }
});

app.get('/repeat/:word/:times', (req, res) => {
  let result = '';
  const times = Number(req.params.times);
  // check if number and bigger than 0
  if (!isNaN(times) && times > 0) {
    for (let i = 0; i < times; i++) {
      // add a space only if not last word
      result += req.params.word + (i === Number(times) - 1 ? '' : ' ');
    }
    res.send(result);
  } else {
    res.send('Y u no pick a number?!');
  }
});

app.get('*', (req, res) => res.send('Nothing to see here, move along!'));

app.listen(3000, () => console.log('Server listening on port 3000'));
