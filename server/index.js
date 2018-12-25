const express = require('express');
const path = require('path');
const parser = require('body-parser');
const passport = require('passport');
const mysql = require('mysql');

const localStrategy = require('passport-local').Strategy;

const app = express();
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(passport.initialize());
app.use(passport.session());

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
        if (password === result[0].password) {
          return done(null, result[0].username)
        } else {
          console.log('bad password', result[0]);
          return done(null, false, { message: 'Wrong Password.'})
        }
      }
    })
  }
))

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/login', passport.authenticate('local'), (req, res) => {
    console.log('successful login', req.user);
    res.send({user: req.user})
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