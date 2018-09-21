'use strict';

const express = require('express');
// const processData = require('process-data');

const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'news'
  },
  searchPath: ['knex', 'public'],
});

// App
const app = express();

// CSV file source
// const inputFileCSV = './data/data-reduced.csv';

// Call process of data csv to DB
// processData.processDataCSV(inputFileCSV);


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


/** Routes */
// GET /
app.get('/', (req, res) => {

  res.send('News360 Test\n');
});

// GET /unique-users
app.get('/unique-users', (req, res) => {
  knex('visits')
    .countDistinct('user')
    .then((result) => {
      res.send(JSON.stringify(result));
    });
});

// GET /unique-users
app.get('/loyal-users', (req, res) => {
  res.send('loyal-users route')
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);