//APP.JS

const path = require('path');
// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//custom import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
//register static folder. grant read access
app.use(express.static(path.join(__dirname, 'public')));

//Outsourced route. Importing shop.js and admin.js. Order matters!
app.use('/admin', adminRoutes); //add segment as a filter
app.use(shopRoutes);

//add 'catch all' middleware at bottom for handling errors: return 404
app.use((req, res, next) => {
    // res.setHeader().send('<h1>Page not found</h1>');
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);