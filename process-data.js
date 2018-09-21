const fs = require('fs');
const csv = require('csv-parse');

// 
const pg = require('knex')({client: 'pg'});

// // Congig DB
// const knex = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ['knex', 'public'],
// });


const processDataCSV = function(inputfileCSV) {

  // Pipe Stream to read the csv (row by row) 
  // and send to DB
  const readStream = fs.createReadStream(inputfileCSV);

  const csvStream = csv()
    .on('data', (row) => {

      
    })
    .on('end', () => {
      console.log("Stream finished.");
    })

  readStream.pipe(csvStream);

}

exports.processDataCSV = processDataCSV;