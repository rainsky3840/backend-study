// ADMIN.JS

const path = require ('path');
const express = require ('express');
const router = express.Router();

//custom root directory
const rootDir = require('../util/path');

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  console.log('Sending');
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  //don't write next, b/c match
});

// admin/add-product => POST
//app.use: work for ALL html methods. app.get : trigger for incoming GET requests only. app.post: trigger for POST requests only
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})
//has to come before "/"

module.exports = router;
