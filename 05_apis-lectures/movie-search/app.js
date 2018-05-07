const express = require('express');
const app = express();
const request = require('request');

const apiKey = 'thewdb';

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('search'));

app.get('/results', (req, res) => {
  const apiReqUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s='${req.query.searchTerm}'`;

  request(apiReqUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const results = JSON.parse(body);
      res.render('results', {results: results['Search']});
    }
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
