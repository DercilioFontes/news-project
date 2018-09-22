
const fs = require('fs');
const csv = require('csv-parse');

// CSV file source
const inputFileCSV = './data/data-reduced.csv';

// Array of lines for seeding
const arraySeed = [];

// Pipe Stream to read the csv (row by row)
const readStream = fs.createReadStream(inputFileCSV);
const csvStream = csv()
  .on('data', (row) => {
    const newSeed = {datetime: row[0], user: row[1], os: row[2], device: row[3]};
    arraySeed.push(newSeed);
  })
  .on('end', () => {
  })
readStream.pipe(csvStream);


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert(arraySeed);
    });
};
