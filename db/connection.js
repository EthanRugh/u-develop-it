const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'carl',
    // Your MySQL password
    password: 'carl',
    database: 'election'
  });

  module.exports = db;