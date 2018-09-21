const fs = require('fs');
const csv = require('csv-parse');

// pg = PostgreSQL DB
const pg = require('knex')({client: 'pg'});


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