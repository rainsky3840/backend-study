// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  console.log('in another middleware!')
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  //don't write next, b/c match
});

//app.use: work for ALL html methods. app.get : trigger for incoming GET requests only. app.post: trigger for POST requests only
app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})
//has to come before "/"

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express.js</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);