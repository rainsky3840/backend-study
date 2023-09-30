// SHOP.JS

const path = require ('path');
const express = require ('express');
const router = express.Router();

//custom root directory
const rootDir = require('../util/path');

//use도 가능하나 get이 필요하므로..
router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express.js</h1>');
  // res.send('<h1>Hello from Express.js</h1>');

  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
  //dirname: global nodejs variable that holds absolute path on OS to this project folder.
  //path.join works on both Linux and on Windows (slashes and backslashes) - so join each file structure manually.

  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;