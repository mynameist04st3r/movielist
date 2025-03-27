const port = 8080;
const express = require('express');
const app = express();
const knex = require('knex');


app.get('/', (req, res) => {
  res.send('Here it is.');
})
app.get('/movies', (req, res) => {
  knex('movies').select('*').then(movies => {
    res.json(movies)
  })
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});