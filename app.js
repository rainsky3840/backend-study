// const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('in the middleware');
  next(); //allows the request to continue to the next middlware in line
});

app.use((req, res, next) => {
  console.log('in another middlware!');
  res.send('<h1>Hello from Express.js</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);