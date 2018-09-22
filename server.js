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
// Ex: http://0.0.0.0:8080/unique-users?device=1,2&os=1,2
app.get('/unique-users', (req, res) => {

  // Check if there is device/os query or set array with all possible values
  const deviceQuery = req.query.device ? req.query.device.split(',') : [0, 1, 2, 3, 4, 5];
  const osQuery = req.query.os ? req.query.os.split(',') : [0, 1, 2, 3, 4, 5, 6];

  knex('visits')
    .countDistinct('user')
    .whereIn('device', deviceQuery)
    .whereIn('os', osQuery)
    .then((result) => {
      res.send(JSON.stringify(result[0]));
    });
});

// GET /loyal-users
// Ex: http://0.0.0.0:8080/loyal-users?device=1&os=2
app.get('/loyal-users', (req, res) => {

  // Check if there is device/os query or set array with all possible values
  const deviceQuery = req.query.device ? req.query.device.split(',') : [0, 1, 2, 3, 4, 5];
  const osQuery = req.query.os ? req.query.os.split(',') : [0, 1, 2, 3, 4, 5, 6];

  knex('visits')
    .select('user')
    .whereIn('device', deviceQuery)
    .whereIn('os', osQuery)
    .distinct('user')
    .count('user')
    .groupBy('user')
    .having(knex.raw('count(user) > 2'))
    .count()
    .then((result) => {
      res.send(JSON.stringify({ count: result.length}));
    });
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);