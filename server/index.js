const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, () => {
  console.log('Listening in on 3000')
})