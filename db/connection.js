const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'process.env.DB_USER',
  // Your MySQL password
  password: 'process.env.DB_PASS',
  database: 'employees'
});

module.exports = db;