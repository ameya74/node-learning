var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-type': 'text/html'})
    res.write('Hello World');
    res.end();
}).listen(8080)