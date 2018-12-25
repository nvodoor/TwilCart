const express = require('express');
const path = require('path');
const parser = require('body-parser');
const passport = require('passport');
const mysql = require('mysql');

const app = express();
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'twilio'
});

connection.connect();

app.post('/signup', (req, res) => {
  const username = req.body['username'];
  const password = req.body['password'];
  const query = 'INSERT INTO users SET USERNAME = ?, PASSWORD = ?'
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.log(error);
      res.send('failure');
    } else {
      console.log(results);
      res.send('success');
    }
  })
})

app.listen(3000, () => {
  console.log('Listening in on 3000')
})