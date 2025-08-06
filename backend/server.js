const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001; // <--- This is your Express server port

app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Replace this
  database: 'softeng2_db',
  port: 3306 // <--- This is the MySQL port, leave this as 3306
});

connection.connect((err) => {
  if (err) {
    console.error('DB connection error:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
