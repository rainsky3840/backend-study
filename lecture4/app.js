const http = require('http');
// ./http일 경우, http module이 아니라 http라는 이름의 local file을 찾음
// const fs = require('fs');
// const { parse } = require('path');

const routes = require('./routes');

// function rqListener(req, res) {
// }

// http.createServer(rqListener);

// event-driven architecture
// http.createServer(function(req, res) {
// })

// const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit(); // => Program shuts down

  // const url = req.url;
  // const method = req.method;

// });


// DIFFERENT WAYS OF GETTING EXPORTS

// const server = http.createServer(routes);

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);