const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="mymessage"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); //must not add after that. Send back to client after that.
  }
  
  if (url === "/message" && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log('NEW CHUNK>> ', chunk)
      body.push(chunk); //push element into array to make it not empty
    });
    return req.on('end', () => { //res.statusCode를 안쪽으로 옮기고 return 추가 - 여기가 실행되면 바깥의 코드 실행 안시키기 위해
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log('PARSEDBODY>> ', parsedBody);
      fs.writeFile('message.txt', message, (err) => {
        console.log('ERROR!')
        //normally this is error log. But for now, moving normal response code in here, b/c done w/ file.
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      }); //diff. btw. writeFile and writeFileSync?
    });
  
    // res.statusCode = 302;
    // res.setHeader('Location', '/');
    // return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>My first Page</title></head>')
  res.write('<body><h1>Hello to my node.js server</h1></body>')
  res.write('</html>')
  res.end(); //must not add after that. Send back to client after that
}

// DIFFERENT WAYS OF EXPORTING

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// }

module.exports.handler = requestHandler;
module.exports.someText = 'Some harded coded text';