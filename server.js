'use strict';

const express = require('express');
const processData = require('process-data')

// CSV file source
const inputFileCSV = './data/data-reduced.csv';

// Call process of data csv to DB
processData.processDataCSV(inputFileCSV);


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);