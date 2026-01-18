const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Test project for YARN package manager');
});

console.log('Test project for YARN package manager');
