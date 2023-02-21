const Pool = require('pg').Pool
require('dotenv').config()

//will create an object
const pool = new Pool({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database:'todoapp'
});

//creates an error code log if there are database connection issues
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });
  
  //exports pool for use in other class
  module.exports = pool;

