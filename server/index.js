const express = require('express');
const path = require('path');
const parser = require('body-parser');
const passport = require('passport');
const mysql = require('mysql');

const localStrategy = require('passport-local').Strategy;

const app = express();
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'twilio'
});

connection.connect();

passport.use(new localStrategy(
  (username, password, done) => {
    console.log(username, password);
    connection.query('SELECT username, password from USERS WHERE username = ?', [username, password], (error, result) => {
      if (error) {
        return done(error)
      } else {
        if (password === result.password) {
          return done(null, user)
        } else {
          console.log('bad password');
          return done(null, false, { message: 'Wrong Password.'})
        }
      }
    })
  }
))

app.get('/login', passport.authenticate('local'), (req, res) => {
    console.log('succsessful login', req.user);
})

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