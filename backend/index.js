const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // or your username
  password: 'root', // your password
  database: 'softeng2_db' // your database name
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL database!');
  }
});

// Sample route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Start server
app.listen(3001, () => {
  console.log('🚀 Server running on http://localhost:3001');
});
