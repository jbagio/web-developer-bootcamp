const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

const list = ['Aubergines', 'Potatoes', 'Chickpeas', 'Plantains', 'Tomatoes'];

app.get('/', (req, res) => res.send('Home'));

app.get('/list', (req, res) => {
  res.render('list', {list: list});
});

app.post('/additem', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus('400');
  }
  list.push(req.body.itemName);
  res.redirect('list');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
