const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to the mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'carl',
        password: 'carl',
        database: 'election'
    },
    console.log('connected to the election database')
);

// create a GET test route. This is for testing our connection to the express.js server
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// querying the mysql database to test connection
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (not found)
// route that handles user requests that aren't supported by the app
app.use((req, res) => {
    res.status(404).end();
});

// add function that will start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})