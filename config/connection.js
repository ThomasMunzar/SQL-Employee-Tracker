const mysql = require('mysql2');

// CONNECT NODE TO DATABASE --activity 11--
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'simpsons_db'
    },
    console.log(`Connected to the database.`)
  );

  module.exports = db